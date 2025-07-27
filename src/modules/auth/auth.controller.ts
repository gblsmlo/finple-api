import { SigninDto } from "@/modules/auth/dto/signin.dto"
import { SignupDto } from "@/modules/auth/dto/signup.dto"
import { IsPublic } from "@/shared/decorators/is-public.decorator"
import { Body, Controller, Post } from "@nestjs/common"
import { AuthService } from "./auth.service"

@IsPublic()
@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post("signin")
	signin(@Body() signinDto: SigninDto) {
		return this.authService.signin(signinDto);
	}

	@Post("signup")
	create(@Body() signupDto: SignupDto) {
		return this.authService.signup(signupDto);
	}
}
