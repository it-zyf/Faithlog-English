package com.comb.framework.frame.tree;

import java.util.*;

@SuppressWarnings("rawtypes")
public class JsTree {

	public static String getJsonTree(Map nodeList) {
		if (nodeList == null || nodeList.isEmpty())
			return "";
		// 根节点
		TreeNode root = null;
		// 构造无序的内存多叉树
		Set entrySet = nodeList.entrySet();
		for (Iterator it = entrySet.iterator(); it.hasNext();) {
			TreeNode node = (TreeNode) ((Map.Entry) it.next()).getValue();
			if (node.getPId() == null || node.getPId().equals("") || node.getPId() == 0) {
				root = node;
			} else {
				if (node.getPId() != null) {
					TreeNode treeNode = (TreeNode) nodeList.get(node.getPId());
					if (treeNode != null) {
						treeNode.getChildren().addChild(node);
					}
				}
			}
		}
		if (root == null)
			return "";
		// 对内存多叉树进行横向排序
		root.sortChildren();
		return root.toString();
	}

	/**
	 * @author lipw
	 * @param nodeList
	 * @return
	 */
	public static List<String> getJsonTree2(Map nodeList) {
		List<String> rootNodes = new ArrayList<String>();
		if (nodeList == null || nodeList.isEmpty()) {
			return rootNodes;
		}

		// 根节点级别，最小级别；
		Integer rootLevel = 255;
		// 构造无序的内存多叉树
		Set entrySet = nodeList.entrySet();
		for (Iterator it = entrySet.iterator(); it.hasNext();) {
			TreeNode node = (TreeNode) ((Map.Entry) it.next()).getValue();
			if (node.getPId() != null) {
				TreeNode treeNode = (TreeNode) nodeList.get(node.getPId());
				if (treeNode != null) {
					treeNode.getChildren().addChild(node);
				}
			}
			if (node.getLevel().intValue() < rootLevel) {
				rootLevel = node.getLevel().intValue();
			}
		}

		entrySet = nodeList.entrySet();
		for (Iterator it = entrySet.iterator(); it.hasNext();) {
			TreeNode node = (TreeNode) ((Map.Entry) it.next()).getValue();

			if (rootLevel.equals(node.getLevel().intValue())) {
				node.sortChildren();
				rootNodes.add(node.toString());
			}
		}

		return rootNodes;
	}
}
