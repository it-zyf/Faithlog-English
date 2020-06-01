package com.umi.ga.controller;
import java.sql.*;


public class Demo {
    public static void main(String[] args) throws ClassNotFoundException, SQLException {
      Demo demo=new Demo();
        long currentTimeMillis = System.currentTimeMillis();
        demo.count();
        System.out.println("耗时:"+(System.currentTimeMillis() - currentTimeMillis));
    }

    public Connection getConnection() throws ClassNotFoundException, SQLException{
        String driver = "com.cloudera.impala.jdbc41.Driver";
        String JDBCUrl = "jdbc:impala://:21050/;auth=noSasl";
        String username = "";
        String password = "";
        Connection conn = null;
        Class.forName(driver);
        conn = (Connection) DriverManager.getConnection(JDBCUrl,username,password);
        return conn;
    }

    public void count() throws ClassNotFoundException, SQLException {
        Connection conn = getConnection();
        String sql = "select count(*) from faithlog.server_account_create";
        System.out.println("查询语句："+sql);
        PreparedStatement ps = conn.prepareStatement(sql);
        ResultSet rs = ps.executeQuery();
        int columnCount = rs.getMetaData().getColumnCount();
        while (rs.next()){
            for(int i=1;i<=columnCount;i++){
                System.out.print(rs.getString(i)+"\t");
            }
            System.out.println("");
        }
    }



}
