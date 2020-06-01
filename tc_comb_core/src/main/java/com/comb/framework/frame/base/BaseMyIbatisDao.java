package com.comb.framework.frame.base;

import com.comb.framework.frame.page.Page;
import com.comb.framework.frame.page.PageRequest;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.util.Assert;

import java.io.Serializable;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author fwb
 * @version 1.0
 */
public abstract class BaseMyIbatisDao<E, PK extends Serializable> extends SqlSessionDaoSupport implements EntityDao<E, PK> {
	
	protected final Log log = LogFactory.getLog(getClass());

	public abstract Class<E> getEntityClass();
	
	private String getTableName(){
		return getEntityClass().getSimpleName();
	}

	public SqlSessionTemplate db() {
		return (SqlSessionTemplate) getSqlSession();
	}

	public void deleteBy(final Object... params) {
		db().delete(getEntityClass().getSimpleName() + ".delete", map(params));
	}
	/**
	 * 删除对象
	 * 
	 * @param entity
	 */
	public void delete(E entity) {
		if (entity == null)
			return;
		BaseEntity vo = (BaseEntity)entity;
		if(vo.getId() == null){
			return;
		}
		db().delete(getEntityClass().getSimpleName() + ".delete", map("id", vo.getId(), "tableSuffix", vo.getTableSuffix()));
	}

	public int save(E entity) {
		return db().insert(getEntityClass().getSimpleName() + ".insert", entity);
	}
	
	public E create(E entity) {
		db().insert(getEntityClass().getSimpleName() + ".insert", entity);
		return entity;
	}
	public  E selectOneByMapperName( String mapperName, E entity){
		return db().selectOne(getEntityClass().getSimpleName()  + "." + mapperName, entity);
	}

	public  List<E> selectListByMapperName( String mapperName, Object entity){
		return db().selectList(getEntityClass().getSimpleName()  + "." + mapperName, entity);
	}
	public int saveBatch(ArrayList<E> list){
		if(list == null || list.isEmpty()){
			return 0;
		}
		return db().insert(getEntityClass().getSimpleName() + ".insertBatch", list);
	}

	public int update(E entity) {
		int affectCount = db().update(getEntityClass().getSimpleName() + ".update", entity);
		return affectCount;
	}
	public int updateByMapperName( String mapperName, E entity) {
		int affectCount = db().update(getEntityClass().getSimpleName() + "." + mapperName, entity);
		return affectCount;
	}
	public int updateCAS(E entity) {
		int affectCount = db().update(getEntityClass().getSimpleName() + ".updateCAS", entity);
		return affectCount;
	}

	public String getCountQuery() {
		return getTableName() + ".count";
	}

	public String getPageSelect() {
		return getTableName() + ".pageSelect";
	}

	public long count(final Object... params) {
		final Map<Object, Object> map = map(params);
		final Number count = (Number) this.db().selectOne(getCountQuery(), map);
		return count.longValue();
	}

	/**
	 * 分页查询 如果sql中分页条件必须是原生map.xml生成
	 * 
	 * @param statementName
	 *            map.xml对应的sql名字
	 * @param pageRequest
	 *            分页请求
	 * @return
	 */
	public Page<E> pageQuery(String statementName, PageRequest<HashMap<String, Object>> pageRequest) {
		Map<String, Object> filters = pageRequest.getFilters();
		if(filters == null){
			filters = new HashMap<String, Object>();
		}
		statementName = getTableName() + "." +statementName;
		filters.put("count", "1");
		filters.remove("start");
		filters.remove("limit");
		//统计总条数
		Long totalCount = null;
		try {
			Object tcObject = db().selectOne(statementName, filters);
			Field fId = tcObject.getClass().getDeclaredField("id");
			if (fId != null){
				fId.setAccessible(true);
				Object tcIdObj = fId.get(tcObject);
				totalCount = Long.valueOf(tcIdObj.toString());
			}
		} catch (NoSuchFieldException e) {
			e.printStackTrace();
		} catch (SecurityException e) {
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		}
		if (totalCount == null || totalCount.longValue() <= 0) {
			return new Page<E>(pageRequest, 0);
		}

		Page<E> page = new Page<E>(pageRequest, totalCount.intValue());
		if(!filters.containsKey("sortColumns")){
			filters.put("sortColumns", pageRequest.getSortColumns());
		}
		filters.put("start", page.getFirstResult());
		filters.put("limit", page.getPageSize());
		filters.remove("count");
		//RowBounds rowBounds = new RowBounds(page.getFirstResult(), page.getPageSize());
		//List<E> list = db().selectList(statementName, filters, rowBounds);
		List<E> list = db().selectList(statementName, filters);
		page.setResult(list);
		return page;
	}

	public List<E> findByMap(final HashMap<String, Object> map) {
		return db().selectList(getPageSelect(), map);
	}

	public List<E> findBy(final Object... params) {
		return db().selectList(getPageSelect(), map(params));
	}

	public E findUniqueBy(final Object... params) {
		return (E) db().selectOne(getPageSelect(), map(params));
	}

	public List<E> findAll() {
		return db().selectList(getPageSelect(), map());
	}

	public Page<E> findByPageRequest(final PageRequest<HashMap<String, Object>> pageRequest) {
		return pageQuery(getPageSelect(), pageRequest);
	}

	/**
	 * 根据参数构造map，参数必须为偶数个，依次为key1，value1，key2，value2…….
	 * 
	 * @param datas
	 *            参数列表
	 * @return 构造出的map
	 */
	protected HashMap<Object, Object> map(final Object... datas) {
		Assert.isTrue(datas.length % 2 == 0, "参数必须为偶数个");
		final HashMap<Object, Object> map = new HashMap<Object, Object>();
		for (int i = 0; i < datas.length; i += 2) {
			map.put(datas[i], datas[i + 1]);
		}
		return map;
	}

}
