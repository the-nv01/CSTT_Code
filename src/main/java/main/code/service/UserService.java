package main.code.service;


import main.code.entity.User;

import java.util.List;

public interface UserService {

    User createUser (User user);

    List<User> getAllUser();

    boolean checkUser (User user);
}