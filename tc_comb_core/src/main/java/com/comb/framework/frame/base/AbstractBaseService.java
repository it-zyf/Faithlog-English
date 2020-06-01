package com.comb.framework.frame.base;

import com.comb.framework.frame.page.Page;
import com.comb.framework.frame.page.PageRequest;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * Manager基类.
 * 
 * @author fwb
 *
 * @param <E> Entity的Class
 */

public abstract class AbstractBaseService<E>{

	protected abstract EntityDao<E, Long> getEntityDao();

	public int save(E entity) {
		return getEntityDao().save(entity);
	}

	public int update(E entity) {
		return getEntityDao().update(entity);
	}

	public void delete(E entity) {
		getEntityDao().delete(entity);
	}

	public List<E> findBy(final Object... params) {
		return find(map(params));
	}

	public List<E> find(final HashMap<String, Object> map) {
		return getEntityDao().findByMap(map);
	}

	public Page<E> findByPageRequest(final PageRequest<HashMap<String, Object>> pr) {
		return getEntityDao().findByPageRequest(pr);
	}

	public E findUniqueBy(final Object... params) {
		return (E) getEntityDao().findUniqueBy(params);
	}


	public void deleteBy(final Object... params){
		this.getEntityDao().deleteBy(params);
	}

	public long count(Object... params){
		return  getEntityDao().count(params);
	}

	/**
	 * 根据参数构造map，参数必须为偶数个，依次为key1，value1，key2，value2…….
	 * @param datas 参数列表
	 * @return 构造出的map
	 */
	private HashMap<String, Object> map(final Object... datas) {
		Assert.isTrue(datas.length % 2 == 0, "参数必须为偶数个");
		HashMap<String, Object> map = new HashMap<String, Object>();
		for (int i = 0; i < datas.length; i += 2) {
			map.put(String.valueOf(datas[i]), datas[i + 1]);
		}
		return map;
	}
}
