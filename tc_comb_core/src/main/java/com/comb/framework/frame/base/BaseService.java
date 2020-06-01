package com.comb.framework.frame.base;

import com.comb.framework.frame.page.Page;
import com.comb.framework.frame.page.PageRequest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * service层接口基类
 */

public interface  BaseService <E> {

	public int save(E e);
	public int update(E e);
	public void delete(E e);
	public Page<E> findByPageRequest(PageRequest<HashMap<String, Object>> pr);
	public List<E> findBy(final Object... params);
	public List<E> find(final HashMap<String, Object> map);
	public void deleteBy(final Object... params);
	public E findUniqueBy(final Object... params);
	public long count(Object... params);

}
