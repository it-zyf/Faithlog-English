package com.comb.framework.frame.base.service;

import com.comb.framework.frame.base.BaseEntity;
import com.comb.framework.frame.page.Page;
import com.comb.framework.frame.page.PageRequest;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;

/**
 * service层接口基类
 */
public interface  BaseManager <E, PK extends Serializable> {

	/**
	 * 
	 * @param ids ,逗号分隔的id集合
	 * @return
	 */
	public List<E> getByIds(String ids);
	
	/**
	 * id集合
	 * @param list
	 * @return
	 */
	public List<E> getByIds(List<Long> list);
	
	public Page<E> findByPageRequest(PageRequest<HashMap<Object, Object>> pr);
	
	public E get(PK id);

	public List<E> findAll();

	public int save(E entity);

	public int update(E entity);

	public int saveOrUpdate(E entity);

	public void removeById(final PK id);

	public void removeByIds(final String ids);
	
	/**
	 * 删除对象
	 * @param entity
	 */
	public void remove(BaseEntity entity);
	
	/**
	 * 根据id集合 批量删除
	 * 
	 * @param list
	 */
	public void deleteByIds(List<Long> list);
	
	public void deleteByLocalIds(String localIds);
	
	public void deleteByLocalIds(List<String> list);
		
	public void deleteBy(final Object... params);
	
	/**
	 * 根据id集合 批量修改
	 * @param list
	 */
	public void updateByObjects(String id);
	
	public void updateByIds(List<Long> list);
	

	/**
	 * 判断指定的字段是否唯一.
	 *
	 * @param property 字段名称
	 * @param orgValue 字段原有值
	 * @param newValue 字段更新值
	 * @return 唯一返回true，否则返回false
	 * isPropertyUnique("username", "", "minwh")
	 */
	public boolean isPropertyUnique(final String property, final String orgValue, final String newValue);
	
	public boolean isUnique(final E entity, final String uniquePropertyNames);
	
	public void removeBy(final Object... params);

	public List<E> findBy(final Object... params);

	public List<E> find(final HashMap<String, Object> map);

	public E findUniqueBy(final Object... params);
	
	public long count(final Object... params);
}
