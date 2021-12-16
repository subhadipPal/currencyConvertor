package com.engelvoelkers.codingchallenge.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import java.util.List;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/java/shops")
public class ShopController {

    @Operation(summary = "Get all shops")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "OK - Successful HTTP request")})
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<String> getShops() {
        return List.of("Hamburg", "Munich");
    }
}
