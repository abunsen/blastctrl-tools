
import Image from 'next/image'

export const Footer = () => {
  return (
    <div>
      <footer className='footer p-6 bg-neutral text-neutral-content grid-cols-2 sm:grid-cols-3 items-center'>
        <a href='https://blastctrl.com' target='_blank' rel='noopener'>
            <Image src="/blastctrl_full_icon.svg" height={120} width={120} />
          {/* <svg
            width='50'
            height='50'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
            className='fill-current hover:fill-primary'>
            <path d='M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z'></path>
          </svg> */}
          <p>
            {/* <span className='font-bold font-display text-xl'>Blast Ctrl</span> */}
            {/* <br /> */}
            <span className='font-light tracking-wide hidden sm:block'>
              Keeping you in control since 2022
            </span>
          </p>
        </a>
        <div className='sm:justify-self-center'>
          <span className='footer-title'>Socials</span>
          <div className='grid grid-flow-col gap-4'>
            <a href='https://twitter.com/BlastCtrl' target='_blank' rel='noopener' className='hover:cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current hover:fill-primary'>
                <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
              </svg>
            </a>
            <a href='https://discord.gg/KHar5PyXtE' target='_blank' rel='noopener' className='hover:cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 16 16'
                className='fill-current hover:fill-primary'>
                <path d='M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z' />
              </svg>
            </a>
            <a href='https://t.me/BlastCtrl' target='_blank' rel='noopener' className='hover:cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current hover:fill-primary'>
                <path
                  clipRule='evenodd'
                  d='m24 12c0 6.6274-5.3726 12-12 12-6.62742 0-12-5.3726-12-12 0-6.62742 5.37258-12 12-12 6.6274 0 12 5.37258 12 12zm-11.57-3.14107c-1.1671.48547-3.49985 1.49027-6.99809 3.01437-.56806.2259-.86563.4469-.89272.663-.04579.3652.41154.509 1.0343.7048.08471.0267.17249.0543.26247.0835.6127.1992 1.43688.4322 1.86535.4414.38865.0084.82244-.1518 1.30135-.4807 3.26854-2.2063 4.95574-3.32149 5.06164-3.34553.0748-.01696.1783-.03829.2485.02408.0701.06235.0633.18045.0558.21215-.0453.1931-1.8405 1.8621-2.7695 2.7258-.2896.2692-.495.4602-.537.5038-.0941.0978-.19.1902-.2821.279-.5692.5487-.99607.9602.0236 1.6322.4901.3229.8822.5899 1.2734.8563.4272.291.8533.5812 1.4046.9426.1405.0921.2746.1877.4053.2808.4972.3545.9439.6729 1.4957.6221.3207-.0295.6519-.331.8201-1.2302.3975-2.1252 1.1789-6.7299 1.3595-8.62742.0159-.16625-.004-.37901-.02-.4724-.016-.0934-.0494-.22647-.1708-.32498-.1438-.11666-.3657-.14126-.465-.13952-.4514.00796-1.1438.24874-4.4764 1.63485z'
                  fillRule='evenodd'
                />
              </svg>
            </a>
          </div>
        </div>
        <div className='grid-flow-col gap-4 text-center pr-2 hidden sm:block sm:justify-self-end'>
          <div>
            <p className='text-white text-base font-light cursor-default '>
              Built with
            </p>
            <a
              rel='noreferrer'
              href='https://github.com/solana-labs/dapp-scaffold/'
              target='_blank'
              className='text-white text-base font-bold hover:text-primary-dark transition-all duration-200'>
              Solana Scaffold Lite
            </a>
          </div>
        </div>
      </footer>
      {/* <footer className="mx-auto text-center footer bg-neutral text-neutral-content">
                <div className='flex flex-row p-2 text-center items-center w-full'>
                    <div className="pl-2">
                            <svg width="100%" height="22" viewBox="0 0 101 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100.48 69.3817L83.8068 86.8015C83.4444 87.1799 83.0058 87.4816 82.5185 87.6878C82.0312 87.894 81.5055 88.0003 80.9743 88H1.93563C1.55849 88 1.18957 87.8926 0.874202 87.6912C0.558829 87.4897 0.31074 87.2029 0.160416 86.8659C0.0100923 86.529 -0.0359181 86.1566 0.0280382 85.7945C0.0919944 85.4324 0.263131 85.0964 0.520422 84.8278L17.2061 67.408C17.5676 67.0306 18.0047 66.7295 18.4904 66.5234C18.9762 66.3172 19.5002 66.2104 20.0301 66.2095H99.0644C99.4415 66.2095 99.8104 66.3169 100.126 66.5183C100.441 66.7198 100.689 67.0067 100.84 67.3436C100.99 67.6806 101.036 68.0529 100.972 68.415C100.908 68.7771 100.737 69.1131 100.48 69.3817ZM83.8068 34.3032C83.4444 33.9248 83.0058 33.6231 82.5185 33.4169C82.0312 33.2108 81.5055 33.1045 80.9743 33.1048H1.93563C1.55849 33.1048 1.18957 33.2121 0.874202 33.4136C0.558829 33.6151 0.31074 33.9019 0.160416 34.2388C0.0100923 34.5758 -0.0359181 34.9482 0.0280382 35.3103C0.0919944 35.6723 0.263131 36.0083 0.520422 36.277L17.2061 53.6968C17.5676 54.0742 18.0047 54.3752 18.4904 54.5814C18.9762 54.7875 19.5002 54.8944 20.0301 54.8952H99.0644C99.4415 54.8952 99.8104 54.7879 100.126 54.5864C100.441 54.3849 100.689 54.0981 100.84 53.7612C100.99 53.4242 101.036 53.0518 100.972 52.6897C100.908 52.3277 100.737 51.9917 100.48 51.723L83.8068 34.3032ZM1.93563 21.7905H80.9743C81.5055 21.7907 82.0312 21.6845 82.5185 21.4783C83.0058 21.2721 83.4444 20.9704 83.8068 20.592L100.48 3.17219C100.737 2.90357 100.908 2.56758 100.972 2.2055C101.036 1.84342 100.99 1.47103 100.84 1.13408C100.689 0.79713 100.441 0.510296 100.126 0.308823C99.8104 0.107349 99.4415 1.24074e-05 99.0644 0L20.0301 0C19.5002 0.000878397 18.9762 0.107699 18.4904 0.313848C18.0047 0.519998 17.5676 0.821087 17.2061 1.19848L0.524723 18.6183C0.267681 18.8866 0.0966198 19.2223 0.0325185 19.5839C-0.0315829 19.9456 0.0140624 20.3177 0.163856 20.6545C0.31365 20.9913 0.561081 21.2781 0.875804 21.4799C1.19053 21.6817 1.55886 21.7896 1.93563 21.7905Z" fill="url(#paint0_linear_174_4403)" />
                                <defs>
                                    <linearGradient id="paint0_linear_174_4403" x1="8.52558" y1="90.0973" x2="88.9933" y2="-3.01622" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.08" stopColor="#9945FF" />
                                        <stop offset="0.3" stopColor="#8752F3" />
                                        <stop offset="0.5" stopColor="#5497D5" />
                                        <stop offset="0.6" stopColor="#43B4CA" />
                                        <stop offset="0.72" stopColor="#28E0B9" />
                                        <stop offset="0.97" stopColor="#19FB9B" />
                                    </linearGradient>
                                </defs>
                            </svg>
                    </div>
                    <div className="max-w-md mx-auto sm:pl-12 grid-flow-col gap-4 text-center">
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                            </svg>
                        </a>
                    </div>
                    <div className="grid-flow-col gap-4 text-center pr-2">
                        <div>
                            <p className="text-white text-base font-light cursor-default ">
                                Powered by
                            </p>
                            <a
                                rel="noreferrer"
                                href="https://solana.com/"
                                target="_blank"
                                className="text-white text-base font-bold hover:text-primary-dark transition-all duration-200"
                            >
                                Solana
                            </a>
                        </div>
                    </div>
                </div>
                <div className='mx-auto text-center'>
                    <p>Copyright © 2022 • BlastCtrl</p>
                </div>
            </footer> */}
    </div>
  );
};
