export interface LoginRequest {
    email: string
    password: string
}

export interface UserDto {
    id: number
    email: string
    firstName: string
    lastName: string
    role: UserRole
}

export interface LoginResponse {
    accessToken: string
    user: UserDto
}

type UserRole = "Employee" | "Manager" | "HRAdmin"