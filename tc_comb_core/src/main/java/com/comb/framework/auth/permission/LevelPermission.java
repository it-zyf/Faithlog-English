package com.comb.framework.auth.permission;

import com.comb.framework.auth.exception.AuthenticationException;

import java.io.Serializable;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

public class LevelPermission implements Permission, Serializable{
	
	private static final long serialVersionUID = -8529201616857368467L;
	
	public final static int PERMISSION_LEVEL_READ = 10; //查询level默认为10
	public final static int PERMISSION_LEVEL_CREATE = 20;//添加
	public final static int PERMISSION_LEVEL_UPDATE = 30;//更新
	public final static int PERMISSION_LEVEL_DELETE = 40;//删除
	
	private static Map<String, LevelPermission> levelPermissions = new ConcurrentHashMap<String, LevelPermission>();

	private String target;
	private int level;
	private List<Set<String>> parts;

	protected LevelPermission(String target, int level) {
		this.level = level;
		setParts(target);
	}
	
	protected LevelPermission(String permission){
		if(permission.contains(PART_SPLIT_TOKEN) || permission.startsWith(PART_SPLIT_TOKEN)){
			throw new AuthenticationException("LevelPermission string config wrong. Make sure permission strings are properly formatted.");			
		}else{
			String[] permissions = permission.split(PART_SPLIT_TOKEN);
			setParts(permissions[0]);
			this.level = Integer.valueOf(permissions[1]);
		}			
	}

	public boolean isPermitted(LevelPermission permission) {
		List<Set<String>> otherParts = permission.getParts();
		// If this permission has less parts than the other permission,
		// everything after the number of parts contained
		// in this permission is automatically implied, so return false
		//if (getParts().size() < otherParts.size())
			//return false;
		int partSize = getParts().size();
		int i = 0;
		boolean isCross = false;
		for (Set<String> otherPart : otherParts) {
			if(i >= partSize){
				return false;
			}
			Set<String> part = getParts().get(i);
			//如果支持跨层通配符
			if(part.contains(CROSS_WILDCARD_TOKEN)){
				isCross = true;
				break;
			}
			//不是层通配符
			if (!part.contains(WILDCARD_TOKEN)) {
				//获得去除的部分
				Set<String> excludePart = getExcludePart(otherPart);
				if(excludePart.isEmpty()){
					if(!part.containsAll(otherPart)){
						return false;
					}
				}else{
					otherPart.remove(excludePart);
					if(!part.containsAll(otherPart)){
						return false;
					}
					for(String str : excludePart){
						str = str.substring(1);
						if(part.contains(str)){
							return false;
						}
					}
				}
			}
			i++;			
		}
        
		if(!isCross){
			// If this permission has more parts than the other parts, only imply it
			// if all of the other parts are wildcards
			for (; i < getParts().size(); i++) {
				Set<String> part = getParts().get(i);
				
				if (!part.contains(WILDCARD_TOKEN)) {
					return false;
				}
			}
		}
		if (this.level >= permission.getLevel())
			return true;
		return false;
	}
	
	private Set<String> getExcludePart(Set<String> set){
		Set<String> excludePart = new HashSet<String>();
		for(String str : set){
			if(str.startsWith(EXCLUDE_DIVIDER_TOKEN)){
				excludePart.add(str);
			}
		}
		return excludePart;
	}

	protected void setParts(String target) {
		if (target == null || target.trim().length() == 0) {
			throw new AuthenticationException(
					"LevelPermission string cannot be null or empty. Make sure permission strings are properly formatted.");
		}

		target = target.trim().toLowerCase();
		this.target = target;

		List<String> parts;
		if(target.contains(PART_DIVIDER_TOKEN)){
			parts = Arrays.asList(target.split(PART_DIVIDER_TOKEN));
		}else{
			parts = Arrays.asList(target.split(PART_DIVIDER_PACKAGE_TOKEN));
		}

		this.parts = new ArrayList<Set<String>>();
		for (String part : parts) {
			Set<String> subparts = asSet(part.split(SUBPART_DIVIDER_TOKEN));
			if (subparts.isEmpty()) {
				throw new AuthenticationException(
						"LevelPermission string cannot contain parts with only dividers. Make sure permission strings are properly formatted.");
			}
			this.parts.add(subparts);
		}

		if (this.parts.isEmpty()) {
			throw new AuthenticationException(
					"LevelPermission string cannot contain only dividers. Make sure permission strings are properly formatted.");
		}
	}

	/*--------------------------------------------
	|  A C C E S S O R S / M O D I F I E R S    |
	============================================*/
	protected List<Set<String>> getParts() {
		return this.parts;
	}

	public String toString() {
		StringBuilder buffer = new StringBuilder();
		for (Set<String> part : parts) {
			if (buffer.length() > 0) {
				buffer.append(":");
			}
			buffer.append(part);
		}
		return buffer.toString();
	}

	public boolean equals(Object o) {
		if (o instanceof LevelPermission) {
			LevelPermission wp = (LevelPermission) o;
			return parts.equals(wp.parts) && level==wp.level;
		}
		return false;
	}

	public int hashCode() {
		return parts.hashCode();
	}

	public String getTarget() {
		return target;
	}

	public void setTarget(String target) {
		this.target = target.toLowerCase();
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}
	
	private  <E> Set<E> asSet(E... elements) {
        if (elements == null || elements.length == 0) {
            return Collections.emptySet();
        }
        LinkedHashSet<E> set = new LinkedHashSet<E>(elements.length * 4 / 3 + 1);
        Collections.addAll(set, elements);
        return set;
    }
	
	public static LevelPermission getLevelPermission(String target, int level) {
		String key = target + level;
		LevelPermission levelPermission = levelPermissions.get(key);
		if (levelPermission == null)
			levelPermission = new LevelPermission(target, level);
		levelPermissions.put(key, levelPermission);
		return levelPermission;
	}
	
}
