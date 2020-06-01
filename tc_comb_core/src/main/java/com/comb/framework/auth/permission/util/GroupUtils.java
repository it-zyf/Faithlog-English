package com.comb.framework.auth.permission.util;

import com.comb.framework.auth.Group;
import com.comb.framework.auth.ThreadContext;

import java.util.HashSet;
import java.util.Set;

public class GroupUtils {

	public static String NO_DEAD_CYCLE_GROUP = "no_dead_cycle_group";

	/**
	 * 判断group是否死循环
	 * 
	 * @param g
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static boolean checkClosedCycle(Group g) {
		Set<String> noDeadCycleGroup = (Set<String>) ThreadContext.get(NO_DEAD_CYCLE_GROUP);
		if (noDeadCycleGroup == null) {
			noDeadCycleGroup = new HashSet<String>();
			ThreadContext.put(NO_DEAD_CYCLE_GROUP, noDeadCycleGroup);
		}
		if(noDeadCycleGroup.contains(g.getName()))
			return false;
		
		Set<String> groupSet = (Set<String>) ThreadContext.get(g.getName());
		if (groupSet == null) {
			groupSet = new HashSet<String>();
		}
		groupSet.add(g.getName());
		ThreadContext.put(g.getName(), groupSet);
		for (Group o : g.getGroups()) {
			if (groupSet.contains(o.getName()))
				return true;
			if(noDeadCycleGroup.contains(o.getName()))
				continue;
			Set<String> subGroupSet = new HashSet<String>();
			subGroupSet.addAll(groupSet);
			subGroupSet.add(o.getName());
			ThreadContext.put(o.getName(), subGroupSet);
			return checkClosedCycle(o);
		}
		return false;
	}
}
