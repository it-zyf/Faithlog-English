package com.umi.ga.service.clientInterface.impl;

import com.comb.framework.auth.ThreadContext;
import com.comb.framework.db.annotation.DbSwitch;
import com.comb.framework.frame.base.AbstractBaseService;
import com.comb.framework.frame.base.EntityDao;
import com.umi.ga.analysis.dao.eventCustomDao;
import com.umi.ga.analysis.dao.eventDistributionDao;
import com.umi.ga.analysis.dao.eventManageDao;
import com.umi.ga.analysis.model.eventCustom;
import com.umi.ga.analysis.model.eventDistribution;
import com.umi.ga.analysis.model.eventManage;
import com.umi.ga.common.HttpResult;
import com.umi.ga.entitys.Times;
import com.umi.ga.entitys.tableDate;
import com.umi.ga.service.clientInterface.eventLogManageService;
import com.umi.ga.service.timeQuantum.HadoopLogTimeQuantumService;
import com.umi.ga.utils.BaseResultUtil;
import org.apache.log4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Component
@DbSwitch(master = {"master"}, slave = {"hivemaster"}, constraint = false)
public class eventLogManageServiceImpl extends AbstractBaseService<eventDistribution> implements eventLogManageService {

    protected final Logger log = Logger.getLogger(this.getClass());//日志
    private org.slf4j.Logger evlog = LoggerFactory.getLogger("eventLog");
    @Autowired
    private eventDistributionDao eventdistributiondao;
    @Autowired
    private eventManageDao eventmanagedao;
    @Autowired
    private eventCustomDao eventcustomdao;
    @Autowired
    private HadoopLogTimeQuantumService timeQuantumService;

    @Override
    protected EntityDao<eventDistribution, Long> getEntityDao() {
        return eventdistributiondao;
    }

    @Override
    public HttpResult hiveSelectEventCustom(Times times) {
        HttpResult result = new HttpResult();
        result.setState(false);
        try {
            if (times.getTimes() == null || times.getTimes().equals("")) {
                result.setMessage("Times未填写");
                return result;
            }
            //通过hive计算事件信息
            ThreadContext.setMethodName("hive");
            List<eventDistribution> eventCustomList = getEntityDao().selectListByMapperName("hiveSelectStartTime", times.getTimes().replace("-", ""));
            result.setData(eventCustomList);
            result.setState(true);
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @Override
    public HttpResult hiveSelectCustom(Times times) {
        HttpResult result = new HttpResult();
        result.setState(false);
        try {
            if (times.getTimes() == null || times.getTimes().equals("")) {
                result.setMessage("Times未填写");
                return result;
            }
            //通过hive计算事件信息
            List<eventDistribution> eventCustomList = getEntityDao().selectListByMapperName("hiveSelectStartTime", times.getTimes().replace("-", ""));
            result.setData(eventCustomList);
            result.setState(true);
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @Override
    @Transactional
    public HttpResult saveEventDataForMysql(HttpResult resule) {
        HttpResult result = new HttpResult();
        result.setState(false);
        if (resule.getData() == null) return result;
        try {
            //存入mysql
            int state = getEntityDao().saveBatch((ArrayList<eventDistribution>) resule.getData());
            result.setState(true);
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @Override
    public HttpResult saveEvent(eventManage event) {
        HttpResult result = new HttpResult();
        result.setState(false);
        try {
            int state = eventmanagedao.save(event);
            result.setState(true);
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @Override
    public HttpResult saveCustomEvent(eventCustom custom) {
        HttpResult result = new HttpResult();
        result.setState(false);
        try {
            int state = eventcustomdao.save(custom);
            result.setState(true);
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @Override
    public HttpResult updateCustomEvent(eventCustom custom) {
        HttpResult result = new HttpResult();
        result.setState(false);
        try {
            int state = eventcustomdao.update(custom);
            result.setState(true);
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @Override
    public HttpResult selectCustomEvent(Times times) {
        HttpResult result = new HttpResult();
        result.setState(false);
        try {
            List<eventDistribution> eventList = eventdistributiondao.selectListByMapperName("selectCustomEvent", times);
            result.setData(eventList);
            result.setState(true);
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @Override
    public HttpResult deleteCustomEvent(eventCustom custom) {
        HttpResult result = new HttpResult();
        result.setState(false);
        try {
            eventcustomdao.delete(custom);
            result.setState(true);
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @Override
    public HttpResult selectEventByEventId(Times times) {
        HttpResult result = new HttpResult();
        result.setState(false);
        try {
            List<eventDistribution> eventList = eventdistributiondao.selectListByMapperName("selectEventById", times);
            result.setData(eventList);
            result.setState(true);
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @Override
    public HttpResult selectAllEvent(Times times) {
        HttpResult result = new HttpResult();
        result.setState(false);
        try {
            List<eventManage> eventList = eventmanagedao.selectListByMapperName("selectAllEvent", times);
            result.setData(eventList);
            result.setState(true);
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @Override
    public HttpResult getEventManage(eventManage event) {
        HttpResult result = new HttpResult();
        result.setState(false);
        try {
            List<eventManage> eventList = eventmanagedao.selectListByMapperName("getEventManage", event);
            result.setData(eventList);
            result.setState(true);
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @Override
    public HttpResult selectCustomEventList(Times times) {
        HttpResult result = new HttpResult();
        result.setState(false);
        try {
            List<eventCustom> eventList = eventcustomdao.selectListByMapperName("selectCustomEventList", times);
            result.setData(eventList);
            result.setState(true);
        } catch (Exception e) {
            log.error(e.getMessage());
            result.setState(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }

    @Override
    public HttpResult generateEventData() {
        List<Times> list = timeQuantumService.selectTableByColumn(new tableDate("event_distribution", "log_time", "", ""));
        for (Times t : list) {
            HttpResult hresu = hiveSelectEventCustom(t);
            ThreadContext.setMethodName("");
            HttpResult mresu = saveEventDataForMysql(hresu);
            if (!mresu.isState() || !hresu.isState()) {
                evlog.info("写入失败");
            }
        }
        return null;
    }

    @Override
    public HttpResult testImpala() {
        HttpResult result = new HttpResult();
        List<String> list = new ArrayList<>();
        list = eventcustomdao.testImpala();
        return BaseResultUtil.resultSuccess("查询成功", list);
    }
}
