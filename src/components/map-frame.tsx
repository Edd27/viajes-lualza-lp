import { getFrameMapUrl } from '@/lib/utils';
import { IAddress } from '@/type';
import { MapPinned } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function MapFrame({
  address,
  zoom = 16,
}: {
  address: IAddress;
  zoom?: number;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='w-full h-full flex items-center justify-center relative'>
      <div
        className={`${
          loading ? 'scale-100' : 'scale-0'
        } transition bg-background absolute top-0 left-0 w-full h-full flex items-center justify-center`}
      >
        <MapPinned className='animate-pulse duration-700 w-28 h-28 text-primary' />
      </div>
      <iframe
        className={`${
          loading ? 'scale-0' : 'scale-100'
        } transition w-full h-full border-none`}
        referrerPolicy='no-referrer-when-downgrade'
        loading='lazy'
        src={getFrameMapUrl(address, zoom)}
        allowFullScreen
      />
    </div>
  );
}
