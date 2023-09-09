'use client';
import { Build } from '@/types/Build';
import styles from '@/styles/Build.module.css';
import { LuSwords } from 'react-icons/lu';
import Rank from './Rank';
import { Valkery } from '@/types/Valkery';
import { switchColor } from '@/helpers/functions';
import Image from 'next/image';

type props = {
  build: Build;
  valkery: Valkery;
};

export default function Build({ build, valkery }: props) {
  return (
    <>
      <div className='mx-2 my-1 inline-flex'>
        <div className='mx-auto '>
          <Rank tier={build.tier} />
          <div className='font-bold'>
            <LuSwords /> {build.label} <LuSwords />
          </div>
          <hr className={`border-b border-${switchColor(valkery.type)}`} />
          {/* Support */}
          {build.supports != undefined && (
            <section className='mt-1 w-full'>
              <div className={`w-fit border-b border-b-${switchColor(valkery.type)}`}>Supports:</div>
              <div className='flex justify-center'>
                <span className={`my-auto text-${switchColor(valkery.type)} border-b border-b-secondary`}>Early:</span>
                {build.supports[0].map((support, i) => (
                  <div key={i} className='inline-block'>
                    <Image objectFit='fill' className='rounded-t-3xl p-2' width={75} height={75} src={`/${support}`} alt={support} />
                  </div>
                ))}
              </div>

              <div className='flex justify-center'>
                <span className={`my-auto text-${switchColor(valkery.type)} border-b border-b-secondary`}>Mid:</span>
                {build.supports[1].map((support, i) => (
                  <div key={i} className='inline-block'>
                    <Image objectFit='fill' className='rounded-t-3xl p-2' width={75} height={75} src={`/${support}`} alt={support} />
                  </div>
                ))}
              </div>

              <div className='flex justify-center'>
                <span className={`my-auto text-${switchColor(valkery.type)} border-b border-b-secondary`}>Late:</span>
                {build.supports[2].map((support, i) => (
                  <div key={i} className='inline-block'>
                    <Image objectFit='fill' className='rounded-t-3xl p-2' width={75} height={75} src={`/${support}`} alt={support} />
                  </div>
                ))}
              </div>
            </section>
          )}
          {/* Emblem */}
          {build.emblems != undefined && (
            <section className='mt-1 w-full'>
              <div className={`w-fit border-b border-b-${switchColor(valkery.type)}`}>Emblems:</div>
              <div className='flex justify-center'>
                <span className={`my-auto text-${switchColor(valkery.type)} border-b border-b-secondary`}>Early:</span>
                {build.emblems[0].map((emblem, i) => (
                  <div key={i} className='inline-block'>
                    <Image objectFit='fill' className='rounded-t-3xl p-2' width={75} height={75} src={`/${emblem}`} alt={emblem} />
                  </div>
                ))}
              </div>

              <div className='flex justify-center'>
                <span className={`my-auto text-${switchColor(valkery.type)} border-b border-b-secondary`}>Mid:</span>
                {build.emblems[1].map((emblem, i) => (
                  <div key={i} className='inline-block'>
                    <Image objectFit='fill' className='rounded-t-3xl p-2' width={75} height={75} src={`/${emblem}`} alt={emblem} />
                  </div>
                ))}
              </div>

              <div className='flex justify-center'>
                <span className={`my-auto text-${switchColor(valkery.type)} border-b border-b-secondary`}>Late:</span>
                {build.emblems[2].map((emblem, i) => (
                  <div key={i} className='inline-block'>
                    <Image objectFit='fill' className='rounded-t-3xl p-2' width={75} height={75} src={`/${emblem}`} alt={emblem} />
                  </div>
                ))}
              </div>
            </section>
          )}
          {/* Signets */}
          <section>
            <div className={`w-fit border-b border-b-${switchColor(valkery.type)}`}>Signets:</div>
            {build.signets.map((signetClass, i) => (
              <div key={i}>
                {signetClass.map((signet, j) => (
                  <div key={j} className='flex justify-between '>
                    <div>{signet.label}</div>
                    <div className={`text-${switchColor(valkery.type)}`}>{signet.priority}</div>
                  </div>
                ))}
                {build.signets.length - 1 > i && <hr className={styles.hr} />}
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
