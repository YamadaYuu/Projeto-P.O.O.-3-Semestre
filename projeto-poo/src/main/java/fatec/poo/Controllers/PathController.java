package fatec.poo.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PathController {

	@GetMapping(value = "/")
	public String home() {
		return "home";
		
	}
	
	@GetMapping(value = "/registro")
	public String registro() {
		return "registro";
		
	}
	
	@GetMapping(value = "/editarCadastro")
	public String editarCadastro() {
		return "editarCadastro";
		
	}

}