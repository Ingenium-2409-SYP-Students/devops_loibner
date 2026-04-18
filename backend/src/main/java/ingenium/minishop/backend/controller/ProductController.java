package ingenium.minishop.backend.controller;

import ingenium.minishop.backend.model.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class ProductController {

    @GetMapping("/api/products")
    public List<Product> getProducts() {
        return List.of(
                new Product(1L, "Notebook", 999.99),
                new Product(2L, "Maus", 24.90),
                new Product(3L, "Tastatur", 59.50)
        );
    }

    @GetMapping("/api/products/count")
    public Map<String, Integer> countProducts() {
        return Map.of("count", 3);
    }
}