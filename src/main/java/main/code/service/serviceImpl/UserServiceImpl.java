package main.code.service.serviceImpl;

import lombok.RequiredArgsConstructor;
import main.code.entity.User;
import main.code.repository.UserRepository;
import main.code.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public boolean checkUser(User user) {
        List<User> us = userRepository.findAll();
        for (int i = 0; i < us.size(); i++) {
            if (user.getUsername().equals(us.get(i).getUsername()) && user.getPassword().equals(us.get(i).getPassword())) {
                return true;
            }
        }
        return false;
    }
}
