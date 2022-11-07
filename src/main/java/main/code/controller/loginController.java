package main.code.controller;

import main.code.entity.User;
import main.code.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

public class loginController {

    @Controller
    @RequestMapping("")
    public class LoginController {

        @Autowired
        private UserService userService;

        @GetMapping("/login-fail")
        public String loginFail(Model model) {
            User user = new User();
            model.addAttribute("user", user);
            model.addAttribute("errorMessage", "Sai thong tin dang nhap!");
            return "content/login";
        }

        @GetMapping("/login")
        public String loginGet(Model model) {
            User user = new User();
            model.addAttribute("user", user);
            return "content/login";
        }

        @GetMapping("/register")
        public String registerGet(Model model) {
            User user = new User();
            model.addAttribute("user", user);
            return "content/login";
        }

        @PostMapping("/register")
        public String registerPost(@ModelAttribute User user, BindingResult rs) {
            if (rs.hasErrors()) return "login";
            BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            userService.createUser(user);
            return "content/login";
        }

    }
}
