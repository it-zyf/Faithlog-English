package com.umi.ga.main;

import com.comb.framework.auth.spring.util.SpringContextUtil;
import com.comb.framework.rpc.server.GRpcServer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.ImportResource;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.io.IOException;

@SpringBootApplication
@ImportResource("classpath:spring/*.xml")
@EnableEurekaClient
@EnableScheduling
public class HadoopLogServerApplication {

    public static void main(String[] args) throws IOException, InterruptedException {
        SpringApplication.run(HadoopLogServerApplication.class, args);
        String rpcPort = SpringContextUtil.getProperty("server.rpc-port");
        GRpcServer server = new GRpcServer(Integer.parseInt(rpcPort));
        server.start();
        server.blockUntilShutdown();
    }
}
