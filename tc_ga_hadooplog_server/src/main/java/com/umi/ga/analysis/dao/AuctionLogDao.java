package com.umi.ga.analysis.dao;


import com.comb.framework.frame.base.BaseMyIbatisDao;
import com.umi.ga.analysis.model.AuctionEntity;
import com.umi.ga.analysis.model.AuctionLog;
import com.umi.ga.entitys.Condition;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class AuctionLogDao extends BaseMyIbatisDao<AuctionLog, Long> {

	public Class<AuctionLog> getEntityClass() {
		return AuctionLog.class;
	}

	String path = this.getEntityClass().getSimpleName() + ".";

	public List<AuctionLog> hive_select_Auction(Condition condition) {
		return this.db().selectList(path + "getAuction", condition);
	}
	public int select_Auction_Count(Condition condition) {
		return this.db().selectOne(path + "getAuctionCount", condition);
	}
	public int select_Auction_Count_xl(AuctionLog condition) {
		return this.db().selectOne(path + "getAuctionCount_xl", condition);
	}
	public List<AuctionEntity> hive_select_Auction_xl(AuctionLog condition) {
		return this.db().selectList(path + "getAuction_xl", condition);
	}
}
