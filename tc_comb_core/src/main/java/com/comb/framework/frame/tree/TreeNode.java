package com.comb.framework.frame.tree;

public class TreeNode {

	private Long id; // 节点ID
	private String name;// 节点内容
	private Long pId;// 节点父ID
	private String treeCode = "";// 节点编码
	private Long platMark = 0L;// 区域标识也是平台标识的前4层表示
	private Byte level = 0;// 层级别 1 2 3 4
	private boolean open = true;
	private String file = "";
	public TreeChildren children = new TreeChildren();
	
	public String getTreeCode() {
		return treeCode;
	}

	public void setTreeCode(String treeCode) {
		this.treeCode = treeCode;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getPId() {
		return pId;
	}

	public void setPId(Long pId) {
		this.pId = pId;
	}

	public TreeChildren getChildren() {
		return children;
	}

	public void setChildren(TreeChildren children) {
		this.children = children;
	}

	public String getFile() {
		return file;
	}

	public void setFile(String file) {
		this.file = file;
	}

	// 深度遍历，拼接JSON字符串
	public String toString() {
		String result  = "{" + "'id':'" + id + "', 'master':'" + name
				+ "','platMark' : '" + platMark
				+ "','level':'" + level + "','pId':'" + pId
				+ "','treeCode':'" + treeCode
				+ "','open':" + open
				+ ",'util':'" + file +"'";
		
		if (children != null && children.getSize() != 0) {
			result += ",'isParent':true,'leaf':false,'children':" + children.toString();
		} else {
			result += ",'isParent':false,'leaf':true";
		}

		return result + "}";
	}

	// 对子节点进行横向排序
	public void sortChildren() {
		if (children != null && children.getSize() != 0) {
			children.sortChildren();
		}
	}

	public Long getPlatMark() {
		return platMark;
	}

	public void setPlatMark(Long platMark) {
		this.platMark = platMark;
	}

	public Byte getLevel() {
		return level;
	}

	public void setLevel(Byte level) {
		this.level = level;
	}

	public boolean isOpen() {
		return open;
	}

	public void setOpen(boolean open) {
		this.open = open;
	}

}
