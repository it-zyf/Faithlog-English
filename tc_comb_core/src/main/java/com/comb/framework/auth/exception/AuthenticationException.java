package com.comb.framework.auth.exception;

/**
 * Root exception for all Shiro runtime exceptions.  This class is used as the root instead
 * of {@link SecurityException} to remove the potential for conflicts;  many other
 * frameworks and products (such as J2EE containers) perform special operations when
 * encountering {@link SecurityException}.
 *
 */
public class AuthenticationException extends SecurityException {

    /**
	 * 
	 */
	private static final long serialVersionUID = -4229285194641661062L;

	/**
     * Creates a new ShiroException.
     */
    public AuthenticationException() {
        super();
    }

    /**
     * Constructs a new ShiroException.
     *
     * @param message the reason for the exception
     */
    public AuthenticationException(String message) {
        super(message);
    }

    /**
     * Constructs a new ShiroException.
     *
     * @param cause the underlying Throwable that caused this exception to be thrown.
     */
    public AuthenticationException(Throwable cause) {
        super(cause);
    }

    /**
     * Constructs a new ShiroException.
     *
     * @param message the reason for the exception
     * @param cause   the underlying Throwable that caused this exception to be thrown.
     */
    public AuthenticationException(String message, Throwable cause) {
        super(message, cause);
    }

}
