package com.comb.framework.serialize;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

public interface Serialization {
	
	byte[] serialize(Object object);
	Object deserialize(byte[] b, Class<?> clazz);
	void serialize(OutputStream out, Object message) throws IOException;
	Object deserialize(InputStream in) throws IOException;
}
