import { Injectable } from '@nestjs/common';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import * as streamifier from 'streamifier';

// đảm bảo cloudinary đã được config ở nơi khác (cloudinary.config({...}))
@Injectable()
export class UploadService {
  async uploadFile(file: Express.Multer.File): Promise<UploadApiResponse> {
    if (!file || !file.buffer) {
      throw new Error(
        'No file buffer found. Make sure to use memoryStorage in multer.',
      );
    }

    return new Promise<UploadApiResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'anime' },
        (error: any, result?: UploadApiResponse) => {
          if (error) {
            // đảm bảo reject truyền Error object (thoả ESLint)
            return reject(new Error(error?.message ?? JSON.stringify(error)));
          }
          if (!result) {
            return reject(new Error('No result from Cloudinary'));
          }
          return resolve(result);
        },
      );

      // tạo stream từ buffer và pipe vào uploadStream
      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }
}
