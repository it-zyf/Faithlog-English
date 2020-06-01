package com.comb.framework.rpc.init;

import java.util.*;

public class ServicesContainer {
    private Queue hostStack;
    private List<Host> hosts;
    private int seed;
    private int amount;

    public ServicesContainer(){
        hosts = new ArrayList<>();
        hostStack = new LinkedList<String>();
        seed = 0;
        amount = 0;
    }

    public void addHost(Host host){
        hostStack.add(host);
        hosts.add(host);
        amount++;
    }

    public Host getRandomHost(){
        if(amount <= 0){
            return null;
        }
        int cn = (++seed) % amount;
        seed = cn;
        return hosts.get(cn);
    }

    public synchronized Host getFILOHost(){
        if(hostStack.isEmpty())
            return null;
        Host host = (Host)hostStack.poll();
        hostStack.add(host);
        return host;
    }

    public void subHost(Host host) {
        hostStack.remove(host);
        hosts.remove(host);
        amount--;
    }


    public Host getWangGuoQiangHost(){
        if(amount <= 0){
            return null;
        }

        Random random = new Random();
        int i = random.nextInt(amount);
        return hosts.get(i);
    }



}
