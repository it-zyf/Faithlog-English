package com.umi.ga.utils;


import com.comb.framework.rpc.model.RpcResult;
import com.comb.framework.rpc.model.RpcResultCode;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

public class HttpUtils {
    public static RpcResult doPost(String url, String jsonString) {
        RpcResult result = new RpcResult(RpcResultCode.ERROR);
        try {
            HttpPost post = new HttpPost(url);
            HttpClient client = HttpClients.createDefault();
            StringEntity s = new StringEntity(jsonString);
            s.setContentEncoding("UTF-8");
            s.setContentType("application/json");
            post.setEntity(s);
            post.addHeader("content-type", "text/xml");
            HttpResponse res = (HttpResponse) client.execute(post);
            if (res.getStatusLine().getStatusCode() == 200) {
                String json = EntityUtils.toString(res.getEntity());
                if (json.equals("success")) {
                    result.setResult(RpcResultCode.SUCCESS);
                    result.setMes("保存成功");
                    result.setData(json);
                } else {
                    result.setMes("保存失败");
                    result.setData(json);
                }
            }
        }
        catch (Exception e)
        {
            result.setResult(RpcResultCode.ERROR);
            result.setMes(e.getMessage());
        }
        return  result;
    }

}
