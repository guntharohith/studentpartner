package com.bazinga.studentPartner.models;

public class JwtResponse {

    private String jwtToken;
    private String userName;

    public JwtResponse(String jwtToken,String userName) {
        this.jwtToken = jwtToken;
        this.userName = userName;
    }

    public JwtResponse(){
        super();
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
