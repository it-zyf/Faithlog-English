package com.comb.framework.serialize.kryo;

import com.esotericsoftware.kryo.Kryo;
import com.esotericsoftware.kryo.Serializer;
import com.esotericsoftware.kryo.io.Input;
import com.esotericsoftware.kryo.io.Output;
import com.esotericsoftware.kryo.serializers.JavaSerializer;
import com.comb.framework.rpc.model.Request;
import com.comb.framework.rpc.model.Response;
import com.comb.framework.serialize.Serialization;
import de.javakaffee.kryoserializers.*;
import de.javakaffee.kryoserializers.guava.ImmutableListSerializer;
import de.javakaffee.kryoserializers.guava.ImmutableMapSerializer;
import de.javakaffee.kryoserializers.guava.ImmutableMultimapSerializer;
import de.javakaffee.kryoserializers.guava.ImmutableSetSerializer;
import org.objenesis.strategy.StdInstantiatorStrategy;

import java.io.*;
import java.lang.reflect.InvocationHandler;
import java.util.*;
import java.util.Map.Entry;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.CopyOnWriteArraySet;

public final class KryoSerialization implements Serialization {
	private static KryoSerialization instance = new KryoSerialization();
	private KryoSerialization(){
	}
	public static KryoSerialization getInstance(){
		return instance;
	}
	@Override
	public void serialize(final OutputStream out, final Object message) throws IOException {
		Kryo kryo = kryos.get();
		Output output = new Output(out);
		kryo.writeClassAndObject(output, message);
		output.close();
	}

	@Override
	public byte[] serialize(Object object) {
		Kryo kryo = kryos.get();
		ByteArrayOutputStream baos = new ByteArrayOutputStream();
		Output output = new Output(baos);
		kryo.writeObject(output, object);
		output.flush();
		output.close();

		byte[] b = baos.toByteArray();
		try {
			baos.flush();
			baos.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return b;
	}

	@Override
	public Object deserialize(byte[] b, Class<?> clazz) {
		ByteArrayInputStream bais = new ByteArrayInputStream(b);
		Kryo kryo = kryos.get();
		Input input = new Input(bais);
		Object result = kryo.readObject(input, clazz);
		input.close();
		return result;
	}

	@Override
	public Object deserialize(final InputStream in) throws IOException {
		Kryo kryo = kryos.get();
		Input input = new Input(in);
		Object result = kryo.readClassAndObject(input);
		input.close();
		return result;
	}

	private ThreadLocal<Kryo> kryos = new ThreadLocal<Kryo>() {
		protected Kryo initialValue() {
			Kryo kryo = new Kryo();
			if (KryoRegistration.isSerialized()) {
				List<Class<?>> list = KryoRegistration.getSerializerList();
				for (Class<?> clazz : list) {
					kryo.register(clazz);
				}
				for (Entry<Class<?>, Serializer> entry : KryoRegistration.getSerializerMap().entrySet()) {
					kryo.register(entry.getKey(), entry.getValue());
				}
			}
			kryo.register(Request.class);
			kryo.register(Response.class);
			kryo.register(boolean[].class);
			kryo.register(byte[].class);
			kryo.register(short[].class);
			kryo.register(char[].class);
			kryo.register(int[].class);
			kryo.register(float[].class);
			kryo.register(long[].class);
			kryo.register(double[].class);
			kryo.register(String[].class);
			kryo.register(int[][].class);
			kryo.register(Object.class);
			kryo.register(Object[].class);
			kryo.register(HashSet.class);
			kryo.register(LinkedHashSet.class);
			kryo.register(TreeSet.class);
			kryo.register(CopyOnWriteArraySet.class);
			kryo.register(ArrayList.class, new JavaSerializer());
			kryo.register(LinkedList.class, new JavaSerializer());
			kryo.register(CopyOnWriteArrayList.class);
			kryo.register(HashMap.class);
			kryo.register(LinkedHashMap.class);
			kryo.register(TreeMap.class);
			kryo.register(Date.class);
			kryo.register(Calendar.class);
			kryo.register(ConcurrentHashMap.class);
			kryo.register(EnumMap.class, new EnumMapSerializer());
			kryo.register(Arrays.asList("").getClass(), new ArraysAsListSerializer());
			kryo.register(Collections.EMPTY_LIST.getClass(), new CollectionsEmptyListSerializer());
			kryo.register(Collections.EMPTY_MAP.getClass(), new CollectionsEmptyMapSerializer());
			kryo.register(Collections.EMPTY_SET.getClass(), new CollectionsEmptySetSerializer());
			kryo.register(Collections.singletonList("").getClass(), new CollectionsSingletonListSerializer());
			kryo.register(Collections.singleton("").getClass(), new CollectionsSingletonSetSerializer());
			kryo.register(Collections.singletonMap("", "").getClass(), new CollectionsSingletonMapSerializer());
			kryo.register(GregorianCalendar.class, new GregorianCalendarSerializer());
			kryo.register(InvocationHandler.class, new JdkProxySerializer());
			UnmodifiableCollectionsSerializer.registerSerializers(kryo);
			SynchronizedCollectionsSerializer.registerSerializers(kryo);
			ImmutableListSerializer.registerSerializers(kryo);
			ImmutableSetSerializer.registerSerializers(kryo);
			ImmutableMapSerializer.registerSerializers(kryo);
			ImmutableMultimapSerializer.registerSerializers(kryo);
			kryo.setInstantiatorStrategy(new StdInstantiatorStrategy());
			kryo.setRegistrationRequired(false);
			kryo.setMaxDepth(20);
			return kryo;
		};
	};
}
