package com.comb.framework.frame.base;

import com.comb.framework.frame.page.Page;
import com.comb.framework.frame.page.PageRequest;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * DAO接口.
 * 
 * @author fwb
 *
 * @param <E> 对应的Entity的Class
 * @param <PK> 主键Class
 */
public interface EntityDao<E, PK extends Serializable> {

	Page<E> findByPageRequest(final PageRequest<HashMap<String, Object>> pr);

	void deleteBy(Object... params);

	/**
	 * 删除对象
	 * @param entity
	 */
	void delete(E entity);
	
	int save(E entity);
	
	E create(E entity);

	E selectOneByMapperName( String mapperName, E entity);

	List<E> selectListByMapperName( String mapperName, Object entity);

	int saveBatch(ArrayList<E> list);

	int update(E entity);
	
	List<E> findAll();

	List<E> findBy(final Object... params);

	E findUniqueBy(final Object... params);

	List<E> findByMap(HashMap<String, Object> map);
	
	public long count(Object... params);

}
