package com.comb.framework.auth.permission;


import com.comb.framework.auth.exception.AuthenticationException;

import java.io.Serializable;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

public class OperationPermission implements Permission, Serializable {
	
	private static final long serialVersionUID = 419743818574423062L;

	private static Map<String, OperationPermission> operationPermissions = new ConcurrentHashMap<String, OperationPermission>();
	
	//最低级别操作码，如果是，则证明有此模块的权限
	private static final String LOWEST_OPERATION = "read";

	private String target;
	private String operation;

	private List<Set<String>> parts;
	private List<Set<String>> operationParts;
	
	
	protected OperationPermission() {
	    
	}

	protected OperationPermission(String target, String operation) {
		setParts(target, operation);
	}
	
	protected OperationPermission(String permission){
		if(!permission.contains(PART_SPLIT_TOKEN) || permission.startsWith(PART_SPLIT_TOKEN)){
			throw new AuthenticationException("OperationPermission string config wrong. Make sure permission strings are properly formatted.");
		}else{
			String[] permissions = permission.split(PART_SPLIT_TOKEN);
			setParts(permissions[0],permissions[1]);
		}			
	}

	protected void setParts(String target, String operation) {
		if (target == null || target.trim().length() == 0 || operation == null
				|| operation.trim().length() == 0) {
			throw new AuthenticationException(
					"OperationPermission string cannot be null or empty. Make sure permission strings are properly formatted.");
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
						"OperationPermission string cannot contain parts with only dividers. Make sure permission strings are properly formatted.");
			}
			this.parts.add(subparts);
		}

		if (this.parts.isEmpty()) {
			throw new AuthenticationException(
					"OperationPermission string cannot contain only dividers. Make sure permission strings are properly formatted.");
		}

		// 操作解析
		operation = operation.trim();
		this.operation = operation;
		parts = Arrays.asList(operation.split(PART_DIVIDER_TOKEN));

		this.operationParts = new ArrayList<Set<String>>();
		for (String part : parts) {
			Set<String> subparts = asSet(part.split(SUBPART_DIVIDER_TOKEN));
			if (subparts.isEmpty()) {
				throw new AuthenticationException(
						"OperationPermission string cannot contain parts with only dividers. Make sure permission strings are properly formatted.");
			}
			this.operationParts.add(subparts);
		}

		if (this.operationParts.isEmpty()) {
			throw new AuthenticationException(
					"OperationPermission string cannot contain only dividers. Make sure permission strings are properly formatted.");
		}

	}

	public boolean isPermitted(OperationPermission permission) {
		if(this.getOperation().contains(WILDCARD_TOKEN) || this.getOperation().equals(permission.getOperation())){
			String target1 = permission.getTarget();
			String target2 = target1;
			if(target1.endsWith(CROSS_WILDCARD_TOKEN)){
				target1 = target1.replace(PART_DIVIDER_TOKEN + CROSS_WILDCARD_TOKEN , "");
				target2 = target2.replace(PART_DIVIDER_PACKAGE_TOKEN + CROSS_WILDCARD_TOKEN , "");
			}else{
				target1 += PART_DIVIDER_TOKEN;
				target2 += PART_DIVIDER_PACKAGE_TOKEN;
			}
			
			if(this.getTarget().startsWith(target1) || this.getTarget().startsWith(target2)){
				return true;
			}
		}
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
		
		// 检查操作
		otherParts = permission.getOperationParts();
		if (getOperationParts().size() < otherParts.size()){
			return false;
		}
		//判断是否拥有最低级别读权限，前面操作位证明有此权限
		if(otherParts.get(0).contains(LOWEST_OPERATION) && otherParts.size() == 1){
			return true;
		}
		i = 0;
		for (Set<String> otherPart : otherParts) {
			Set<String> part = getOperationParts().get(i);
			if (!part.contains(WILDCARD_TOKEN)	&& !part.containsAll(otherPart)) {
				return false;
			}
			i++;
		}
		// If this permission has more parts than the other parts, only imply it
		// if all of the other parts are wildcards
		for (; i < getOperationParts().size(); i++) {
			Set<String> part = getOperationParts().get(i);
			if (!part.contains(WILDCARD_TOKEN)) {
				return false;
			}
		}
		return true;
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
		if (o instanceof OperationPermission) {
			OperationPermission op = (OperationPermission) o;
			return parts.equals(op.parts) && operationParts.equals(op.operationParts);
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

	public String getOperation() {
		return operation;
	}

	public void setOperation(String operation) {
		this.operation = operation;
	}

	protected List<Set<String>> getParts() {
		return this.parts;
	}

	protected List<Set<String>> getOperationParts() {
		return operationParts;
	}
	
	private  <E> Set<E> asSet(E... elements) {
        if (elements == null || elements.length == 0) {
            return Collections.emptySet();
        }
        LinkedHashSet<E> set = new LinkedHashSet<E>(elements.length * 4 / 3 + 1);
        Collections.addAll(set, elements);
        return set;
    }
	
	/**
	 * 获得操作权限对象 没有则会初始化，放入缓存
	 * @param target
	 * @param operation
	 * @return
	 */
	public static OperationPermission getOperationPermission(String target, String operation){
		String key = target + operation;
		OperationPermission operationPermission = operationPermissions.get(key);
		if (operationPermission == null)
			operationPermission = new OperationPermission(target, operation);
		operationPermissions.put(key, operationPermission);
		return operationPermission;
	}

}
