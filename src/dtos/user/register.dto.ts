import{
    IsString,
    IsNotEmpty,
    IsPhoneNumber,
    IsDate
} from 'class-validator';

export class RegisterDTO{
      @IsString()
      full_name: string;

      @IsPhoneNumber()
      phone_number: string;

      @IsString()
      @IsNotEmpty()
      address: string;

      @IsString()
      @IsNotEmpty()
      password: string;

      @IsString()
      retype_password: string;

      date_of_birth: Date;

      facebook_account_id: number;
      google_account_id: number;
      role_id: 1;
      constructor(data: any){
        this.full_name = data.full_name;
        this.phone_number = data.phone_number;
        this.address = data.address;
        this.password = data.password;
        this.retype_password = data.retype_password;
        this.date_of_birth = data.date_of_birth;
        this.facebook_account_id = data.facebook_account_id || 0;
        this.google_account_id = data.google_account_id || 0;
        this.role_id = data.role_id||1;
      }
}