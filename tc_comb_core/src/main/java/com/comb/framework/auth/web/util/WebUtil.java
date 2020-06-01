package com.comb.framework.auth.web.util;

import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;

public class WebUtil{
	
	public static final String DEFAULT_CHARACTER_ENCODING = "UTF-8";
	public static final String INCLUDE_CONTEXT_PATH_ATTRIBUTE = "javax.servlet.include.context_path";
	public static final String INCLUDE_REQUEST_URI_ATTRIBUTE = "javax.servlet.include.request_uri";

	public static String getPathWithinApplication(HttpServletRequest request) {
   	 String contextPath = getContextPath(request);
        String requestUri = getRequestUri(request);
        if (StringUtils.startsWithIgnoreCase(requestUri, contextPath)) {
            // Normal case: URI contains context path.
            String path = requestUri.substring(contextPath.length());
            return (StringUtils.hasText(path) ? path : "/");
        } else {
            // Special case: rather unusual.
            return requestUri;
        }
   }
   
   /**
    * Decode the supplied URI string and strips any extraneous portion after a ';'.
    *
    * @param request the incoming HttpServletRequest
    * @param uri     the application's URI string
    * @return the supplied URI string stripped of any extraneous portion after a ';'.
    */
   private static String decodeAndCleanUriString(HttpServletRequest request, String uri) {
       uri = decodeRequestString(request, uri);
       int semicolonIndex = uri.indexOf(';');
       return (semicolonIndex != -1 ? uri.substring(0, semicolonIndex) : uri);
   }

   /**
    * Return the context path for the given request, detecting an include request
    * URL if called within a RequestDispatcher include.
    * <p>As the value returned by <code>request.getContextPath()</code> is <i>not</i>
    * decoded by the servlet container, this method will decode it.
    *
    * @param request current HTTP request
    * @return the context path
    */
   public static String getContextPath(HttpServletRequest request) {
       String contextPath = (String) request.getAttribute(INCLUDE_CONTEXT_PATH_ATTRIBUTE);
       if (contextPath == null) {
           contextPath = request.getContextPath();
       }
       if ("/".equals(contextPath)) {
           // Invalid case, but happens for includes on Jetty: silently adapt it.
           contextPath = "";
       }
       return decodeRequestString(request, contextPath);
   }
   
   public static String encodeRequestString(HttpServletRequest request, String source){
	   String enc = determineEncoding(request);
       try {
           return URLEncoder.encode(source, enc);
       } catch (UnsupportedEncodingException ex) {
           return URLEncoder.encode(source);
       }
   }
   
   public  static String decodeRequestString(HttpServletRequest request, String source) {
	   if(StringUtils.isEmpty(source))
		   return null;
       String enc = determineEncoding(request);
       try {
           return URLDecoder.decode(source, enc);
       } catch (UnsupportedEncodingException ex) {
           return URLDecoder.decode(source);
       }
   }
   
   public  static String determineEncoding(HttpServletRequest request) {
       String enc = request.getCharacterEncoding();
       if (enc == null) {
           enc = DEFAULT_CHARACTER_ENCODING;
       }
       return enc;
   }
   
   /**
    * Return the request URI for the given request, detecting an include request
    * URL if called within a RequestDispatcher include.
    * <p>As the value returned by <code>request.getRequestURI()</code> is <i>not</i>
    * decoded by the servlet container, this method will decode it.
    * <p>The URI that the web container resolves <i>should</i> be correct, but some
    * containers like JBoss/Jetty incorrectly include ";" strings like ";jsessionid"
    * in the URI. This method cuts off such incorrect appendices.
    *
    * @param request current HTTP request
    * @return the request URI
    */
   public static String getRequestUri(HttpServletRequest request) {
       String uri = (String) request.getAttribute(INCLUDE_REQUEST_URI_ATTRIBUTE);
       if (uri == null) {
           uri = request.getRequestURI();
       }
       return normalize(decodeAndCleanUriString(request, uri), true);
   }


   /**
    * Normalize a relative URI path that may have relative values ("/./",
    * "/../", and so on ) it it.  <strong>WARNING</strong> - This method is
    * useful only for normalizing application-generated paths.  It does not
    * try to perform security checks for malicious input.
    * Normalize operations were was happily taken from org.apache.catalina.util.RequestUtil in
    * Tomcat trunk, r939305
    *
    * @param path             Relative path to be normalized
    * @param replaceBackSlash Should '\\' be replaced with '/'
    * @return normalized path
    */
   private static String normalize(String path, boolean replaceBackSlash) {

       if (path == null)
           return null;

       // Create a place for the normalized path
       String normalized = path;

       if (replaceBackSlash && normalized.indexOf('\\') >= 0)
           normalized = normalized.replace('\\', '/');

       if (normalized.equals("/."))
           return "/";

       // Add a leading "/" if necessary
       if (!normalized.startsWith("/"))
           normalized = "/" + normalized;

       // Resolve occurrences of "//" in the normalized path
       while (true) {
           int index = normalized.indexOf("//");
           if (index < 0)
               break;
           normalized = normalized.substring(0, index) +
                   normalized.substring(index + 1);
       }

       // Resolve occurrences of "/./" in the normalized path
       while (true) {
           int index = normalized.indexOf("/./");
           if (index < 0)
               break;
           normalized = normalized.substring(0, index) +
                   normalized.substring(index + 2);
       }

       // Resolve occurrences of "/../" in the normalized path
       while (true) {
           int index = normalized.indexOf("/../");
           if (index < 0)
               break;
           if (index == 0)
               return (null);  // Trying to go outside our context
           int index2 = normalized.lastIndexOf('/', index - 1);
           normalized = normalized.substring(0, index2) +
                   normalized.substring(index + 3);
       }

       // Return the normalized path that we have completed
       return (normalized);
   }
   
   /**
    * Sometimes a user agent will send the rememberMe cookie value without padding,
    * most likely because {@code =} is a separator in the cookie header.
    * <p/>
    * Contributed by Luis Arias.  Thanks Luis!
    *
    * @param base64 the base64 encoded String that may need to be padded
    * @return the base64 String padded if necessary.
    */
   private String ensureBase64Padding(String base64) {
       int length = base64.length();
       if (length % 4 != 0) {
           StringBuilder sb = new StringBuilder(base64);
           for (int i = 0; i < length % 4; ++i) {
               sb.append('=');
           }
           base64 = sb.toString();
       }
       return base64;
   }


}
