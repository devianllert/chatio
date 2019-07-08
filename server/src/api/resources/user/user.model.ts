// import mongoose, { Schema, HookNextFunction } from 'mongoose';
// import jwt, { Secret, SignOptions } from 'jsonwebtoken';
// import crypto from 'crypto';
// import bcrypt from 'bcryptjs';

// export const enum UserRole {
//   user = 'user',
//   admin = 'admin',
// }

// export type UserDocument = mongoose.Document & {
//   email: string;
//   password: string;
//   avatar: string;
//   role: UserRole;
//   date: Date;
//   comparePassword: (password: string) => Promise<boolean>;
//   generateToken: () => string;
// };

// const userSchema = new Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     unique: true,
//     required: true,
//     lowercase: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     select: false,
//   },
//   avatar: {
//     type: String,
//   },
//   role: {
//     type: String,
//     enum: [UserRole.user, UserRole.admin],
//     default: UserRole.user,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// /**
//  * Password hash middleware.
//  */
// userSchema.pre('save', async function save(next: HookNextFunction): Promise<HookNextFunction> {
//   try {
//     const user = this as UserDocument;

//     if (!user.isModified('password')) {
//       return next();
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(user.password, salt);

//     user.password = hash;

//     return next();
//   } catch (error) {
//     return next(error);
//   }
// });

// /**
//  * Helper method for creating token for current user
//  */
// userSchema.methods.generateToken = function generateToken(): string {
//   const { id, role } = this as UserDocument;
//   const payload: object = {
//     user: {
//       id,
//       role,
//     },
//   };
//   const options: SignOptions = { expiresIn: '1h' };

//   const token: string = jwt.sign(payload, process.env.SECRET_TOKEN as Secret, options);

//   return token;
// };

// userSchema.methods.comparePassword = async function comparePassword(password: string): Promise<boolean> {
//   const user = this as UserDocument;
//   const isMatch: boolean = await bcrypt.compare(password, user.password);

//   return isMatch;
// };

// /**
//  * Helper method for getting user's gravatar.
//  */
// userSchema.methods.gravatar = function gravatar(size: number = 200): string {
//   const user = this as UserDocument;
//   const md5: string = crypto
//     .createHash('md5')
//     .update(user.email)
//     .digest('hex');

//   return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
// };

// export default mongoose.model<UserDocument>('User', userSchema);
