package com.umi.ga.runner;//package com.umi.ga.runner;
//
//import com.umi.ga.analysis.dao.dataInfoDao;
//import com.umi.ga.analysis.model.DelayTimeDistribution;
//import com.umi.ga.analysis.model.IPaddrDistribution;
//import com.umi.ga.analysis.model.NetworkDistribution;
//import com.umi.ga.entitys.TimeQuantum;
//import com.umi.ga.entitys.Times;
//import com.umi.ga.service.timeQuantum.HadoopLogTimeQuantumService;
//import com.umi.ga.utils.DateHelper;
//import com.umi.ga.utils.MapSortUtil;
//import org.apache.log4j.Logger;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.ApplicationArguments;
//import org.springframework.boot.ApplicationRunner;
//import org.springframework.core.annotation.Order;
//import org.springframework.stereotype.Component;
//import sun.rmi.runtime.Log;
//
//import java.text.SimpleDateFormat;
//import java.util.*;
//
//@Order(1)
//@Component
//public class TimeQuantumRunner implements ApplicationRunner {
//
//    //
//    private final Logger log = Logger.getLogger(this.getClass());
//
//    @Autowired
//    private HadoopLogTimeQuantumService timeQuantumService;
//
//    @Autowired
//    private dataInfoDao dataInfo;
//
//    /**
//     * Callback used to run the bean.
//     *
//     * @param args incoming application argumentsa
//     * @throws Exception on error
//     */
//    @Override
//    public void run(ApplicationArguments args) throws Exception {
//        DelayTimeDistribution dtDistribution = timeQuantumService.selectMaxTimeDateDealyTime();
//        if ("0".equals(dtDistribution.getTimedate())) {
//            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//            String yesterday = sdf.format(System.currentTimeMillis() - 24 * 60 * 60 * 1000);
//            dtDistribution.setTimedate(yesterday);
//        }
////        IPaddrDistribution ipDistribution = timeQuantumService.selectMaxTimeIPaddr();
////        NetworkDistribution netDistribution = timeQuantumService.selectMaxTimeNetwork();
//        String delayTimeDate = dtDistribution.getTimedate();
////        String ipAddrTimeDate = ipDistribution.getTimedate();
////        String netTimeDate = netDistribution.getTimedate();
//        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//        SimpleDateFormat timeDateFormat = new SimpleDateFormat("yyyyMMdd");
//        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//        List<Date> dateList = new LinkedList<>();
//        try {
//            Date now = sdf.parse(sdf.format(new Date()));
//            Date timeDate;
////        if (delayTimeDate.equals(ipAddrTimeDate) && delayTimeDate.equals(netTimeDate)) {
//            timeDate = sdf.parse(delayTimeDate);
//            while (timeDate.before(sdf.parse(sdf.format(now.getTime() - 1)))) {
//                timeDate = sdf.parse(sdf.format(timeDate.getTime() + 24 * 60 * 60 * 1000));
//                dateList.add(timeDate);
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("启动分析 -- ip、delay、network 以天为单位分隔日期段失败：[ timeDate=" + delayTimeDate + " ] " + e.getMessage());
//        }
//
//
//        if (null != dateList && 0 != dateList.size()) {
//            for (Date date : dateList) {
////                try {
//                Times times = new Times();
//                times.setTimes(timeDateFormat.format(date));
//                List<TimeQuantum> tQList = timeQuantumService.hiveSelectTimeQuantumByDay(times);
//
//                // 有序
//                Map<String, Integer> delayTimeMap = new LinkedHashMap<>();
//                Map<String, Integer> networkMap = new HashMap<>();
//                Map<String, Integer> addressMap = new HashMap<>();
//                Map<String, Integer> distinctMap = new HashMap<>();
//
//                // 有序 -- TODO
//                delayTimeMap.put("0-400", 0);
//                delayTimeMap.put("401-600", 0);
//                delayTimeMap.put("601-800", 0);
//                delayTimeMap.put("801-1000", 0);
//                delayTimeMap.put("1001-1200", 0);
//                delayTimeMap.put("1201-1400", 0);
//                delayTimeMap.put("1401-1700", 0);
//                delayTimeMap.put("1701-2000", 0);
//                delayTimeMap.put("2001-2500", 0);
//                delayTimeMap.put("2501-3000", 0);
//                delayTimeMap.put("3001-4000", 0);
//                delayTimeMap.put("4001-5000", 0);
//                delayTimeMap.put(">5000", 0);
//
//                for (TimeQuantum timeQuantum : tQList) {
//                    if (null == timeQuantum || null == timeQuantum.getMacAddr()) continue;
//                    String networkStates = timeQuantum.getNetworkStates() == null || "".equals(timeQuantum.getNetworkStates()) ? "-1" : timeQuantum.getNetworkStates();
//                    String region = timeQuantum.getRegion() == null || "".equals(timeQuantum.getRegion()) ? "-1" : timeQuantum.getRegion();
//                    if (!"-1".equals(networkStates))
//                        if (networkMap.containsKey(networkStates))
//                            networkMap.put(networkStates, networkMap.get(networkStates).intValue() + 1);
//                        else
//                            networkMap.put(networkStates, 1);
//
//                    if (!"-1".equals(region)) {
//                        if (!distinctMap.containsKey(timeQuantum.getMacAddr())) {
//                            if (addressMap.containsKey(region))
//                                addressMap.put(region, addressMap.get(region).intValue() + 1);
//                            else
//                                addressMap.put(region, 1);
//                            distinctMap.put(timeQuantum.getMacAddr(), 1);
//                        }
//                    }
//                    if (timeQuantum.getColdStartTime() != null && !"".equals(timeQuantum.getColdStartTime())) {
//                        Integer runTime = Integer.valueOf(timeQuantum.getColdStartTime());
//                        if (runTime >= 0 && runTime <= 400)
//                            delayTimeMap.put("0-400", delayTimeMap.get("0-400").intValue() + 1);
//                        else if (runTime >= 401 && runTime <= 600)
//                            delayTimeMap.put("401-600", delayTimeMap.get("401-600").intValue() + 1);
//                        else if (runTime >= 601 && runTime <= 800)
//                            delayTimeMap.put("601-800", delayTimeMap.get("601-800").intValue() + 1);
//                        else if (runTime >= 801 && runTime <= 1000)
//                            delayTimeMap.put("801-1000", delayTimeMap.get("801-1000").intValue() + 1);
//                        else if (runTime >= 1001 && runTime <= 1200)
//                            delayTimeMap.put("1001-1200", delayTimeMap.get("1001-1200").intValue() + 1);
//                        else if (runTime >= 1201 && runTime <= 1400)
//                            delayTimeMap.put("1201-1400", delayTimeMap.get("1201-1400").intValue() + 1);
//                        else if (runTime >= 1401 && runTime <= 1700)
//                            delayTimeMap.put("1401-1700", delayTimeMap.get("1401-1700").intValue() + 1);
//                        else if (runTime >= 1701 && runTime <= 2000)
//                            delayTimeMap.put("1701-2000", delayTimeMap.get("1701-2000").intValue() + 1);
//                        else if (runTime >= 2001 && runTime <= 2500)
//                            delayTimeMap.put("2001-2500", delayTimeMap.get("2001-2500").intValue() + 1);
//                        else if (runTime >= 2501 && runTime <= 3000)
//                            delayTimeMap.put("2501-3000", delayTimeMap.get("2501-3000").intValue() + 1);
//                        else if (runTime >= 3001 && runTime <= 4000)
//                            delayTimeMap.put("3001-4000", delayTimeMap.get("3001-4000").intValue() + 1);
//                        else if (runTime >= 4001 && runTime <= 5000)
//                            delayTimeMap.put("4001-5000", delayTimeMap.get("4001-5000").intValue() + 1);
//                        else if (runTime > 5000)
//                            delayTimeMap.put(">5000", delayTimeMap.get(">5000").intValue() + 1);
//                    }
//                }
//                // 转换为list
//                LinkedList<DelayTimeDistribution> delayTimeList = new LinkedList<>();
//                for (Map.Entry<String, Integer> entry : delayTimeMap.entrySet()) {
//                    DelayTimeDistribution dtDis = new DelayTimeDistribution();
//                    dtDis.setTimequantum(entry.getKey());
//                    dtDis.setCount(String.valueOf(entry.getValue()));
//                    dtDis.setTimedate(sdf.format(date));
//                    delayTimeList.add(dtDis);
//                }
//                LinkedList<IPaddrDistribution> addressList = new LinkedList<>();
//                for (Map.Entry<String, Integer> entry : MapSortUtil.sortByValue(addressMap).entrySet()) {
//                    IPaddrDistribution addrDis = new IPaddrDistribution();
//                    addrDis.setIpaddr(entry.getKey());
//                    addrDis.setCount(String.valueOf(entry.getValue()));
//                    addrDis.setTimedate(sdf.format(date));
//                    addressList.add(addrDis);
//                }
//                LinkedList<NetworkDistribution> networkList = new LinkedList<>();
//                for (Map.Entry<String, Integer> entry : networkMap.entrySet()) {
//                    NetworkDistribution netDis = new NetworkDistribution();
//                    netDis.setNetworktype(entry.getKey());
//                    netDis.setCount(String.valueOf(entry.getValue()));
//                    netDis.setTimedate(sdf.format(date));
//                    networkList.add(netDis);
//                }
//                // 批量插入 事务管理
//                String str = timeQuantumService.insertBatch(delayTimeList, addressList, networkList);
//                log.info("启动分析 -- ip、delay、network 数据初始化：[ timeDate=" + sdf.format(date) + " ] delayTime : ipaddr : network = " + str);
//                System.err.println("数据初始化 timeDate=" + sdf.format(date) + " delayTime : ipaddr : network = " + str);
////                } catch (Exception e) {
////                    e.printStackTrace();
////                    log.error("启动分析 -- ip、delay、network 数据分析失败：[ timeDate=" + sdf.format(date) + " ] " + e.getMessage());
////                }
//            }
//        }
//    }
////    }
//}
