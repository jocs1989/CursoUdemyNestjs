export class Product {}

import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength, Matches } from 'class-validator';
import * as bcrypt from 'bcrypt';
import { Unique } from 'class-validator-unique-validator';
import { Trim, NormalizeEmail, Blacklist } from 'class-sanitizer';

@Entity()
@Unique(['email'], { message: 'El correo electrónico ya está registrado.' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @Trim()
  @Blacklist(" \t\n\r", { message: 'El nombre no debe contener espacios en blanco.' })
  @Column()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @Trim()
  @Blacklist(" \t\n\r", { message: 'El apellido no debe contener espacios en blanco.' })
  @Column()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  @NormalizeEmail()
  @Trim()
  @Column()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  @Trim()
  @Column()
  roles: string;

  @IsString()
  @MaxLength(255)
  @Trim()
  @Column()
  imagen: string;

  @IsString()
  @MaxLength(15)
  @Trim()
  @Column()
  telefono: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(255)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, { message: 'La contraseña debe contener al menos una minúscula, una mayúscula y un número.' })
  @Trim()
  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}

