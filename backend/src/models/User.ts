import { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document{
    email:string,
    password:string
    comparePassword(candidatePassword: string): Promise<boolean>;
};

const userSchema = new Schema<IUser>({
    email:{type: String, required:true, unique:true},
    password:{type:String, required:true, minlength:6}
});

userSchema.pre('save', async function (next) {
    if(!this.isModified('password'))return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

userSchema.methods.comparePassword = async function (candidatePassword: string) {
    return bcrypt.compare(candidatePassword, this.password);
};


export default userSchema;