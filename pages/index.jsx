import Link from 'next/link';
import React from 'react';
import { ButtonComponent } from '../components/base_component';

const Index = () => {
  return (
    <div className='container mx-auto'>
      <h1 className="my-8">HELLO WORLD!</h1>

      <div className='flex gap-5'>
        <Link href="/component">
          <ButtonComponent label="Cek Input Component" bg={"primary"} />
        </Link>

        <Link href="/button-component">
          <ButtonComponent label="Cek Button Component" bg={"primary"} />
        </Link>

        <Link href="/other-component">
          <ButtonComponent label="Cek Other Component" bg={"primary"} />
        </Link>
      </div>

    </div>
  );
}

export default Index;
