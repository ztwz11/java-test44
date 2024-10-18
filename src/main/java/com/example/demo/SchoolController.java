package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SchoolController {

    @GetMapping("/School")
    public String home(Model model) {
        model.addAttribute("message", "32r2");
        return "School";
    }
}