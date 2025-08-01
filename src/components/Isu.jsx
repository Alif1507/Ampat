const Isu = () => {
  return (
    <div className='relative mt-30'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='flex text-center hero-title text-4xl font-medium text-white justify-center max-md:text-black'>Isu Saat Ini</h1>
        <img src="/gambar/garis-putih.png" alt="" />
      </div>

      <div className='mx-14 flex justify-center  gap-5 max-md:hidden'>
        <div className='bg-[#F5F5DC] group relative mt-10 w-[870px] hover:bg-[#ffffff] hover:shadow-2xl transition duration-300 overflow-hidden'>
          <img className='absolute -bottom-20 -right-15 -rotate-45 group-hover:rotate-20 transition duration-300 ' src="/gambar/daun.png" alt="" />
          <img className='absolute top-0 left-0' src="/gambar/petik.png" alt="sasasa" />
          <h1 className='text-xl font-semibold text-shadow-lg py-5 ml-12'>Tambang Nikel Pada Ekosistem Laut</h1>
          <p className='ml-12 w-[760px]  mr-10'>Raja Ampat, surga laut dunia yang dikenal dengan kekayaan terumbu karang dan keanekaragaman hayati lautnya, kini menghadapi ancaman serius: ekspansi tambang nikel. Aktivitas tambang telah menyebabkan deforestasi lebih dari 500 hektar hutan dan mencemari laut dengan sedimentasi, yang menutupi terumbu karang dan mengganggu kehidupan spesies laut penting seperti paus sperma dan kima raksasa.</p>
          <p className='ml-12 mt-2  w-[760px] mr-10'>Pencemaran ini berdampak langsung pada pariwisata bahari—sumber utama pendapatan masyarakat lokal—dan merusak sistem konservasi yang selama ini berhasil dijalankan bersama komunitas. Jika tidak dihentikan, tambang nikel bisa menghancurkan ekosistem yang tak tergantikan dan masa depan ekonomi berkelanjutan di Raja Ampat.</p>
          <p className='mt-2 ml-12  w-[760px] mr-10'>Kini, masyarakat, aktivis, dan ahli lingkungan mendesak pemerintah untuk mencabut izin tambang dan memperkuat pengawasan agar kerusakan ini tidak semakin meluas.</p>
          <div className=" flex ml-12 py-3">
            <div className="bg-[#F6F6F6] px-2 py-2 rounded-xl shadow-xl text-[11px]">
              Sumber : detik.com/kompas.com
            </div>
          </div>
        </div>

        <div className='bg-[#F5F5DC] mt-10 w-[560px] relative overflow-hidden group hover:bg-[#ffffff] hover:shadow-2xl transition duration-300'>
          <img className='absolute -bottom-20 -right-15 -rotate-45 group-hover:rotate-20 transition duration-300' src="/gambar/daun.png" alt="" />
          <h1 className='text-xl font-semibold text-shadow-lg py-4 ml-12'>Tambang Nikel dan Kerusakan Ekologis</h1>
          <p className='ml-12 w-[450px] '>Aktivitas tambang nikel di Raja Ampat mencemari laut dan merusak terumbu karang—daya tarik utama wisatawan. Sedimentasi dan limbah tambang menurunkan kualitas air dan membunuh biota laut, sehingga wisata selam dan ekowisata terganggu.</p>
          <p className='ml-12 mt-2  w-[450px] '>Akibatnya, pendapatan masyarakat lokal yang bergantung pada pariwisata menurun drastis. Jika tidak segera dihentikan, tambang bisa menghapus sumber penghidupan warga dan merusak citra Raja Ampat di mata dunia.</p>
          <div className=" flex ml-12 mt-6">
            <div className="bg-[#F6F6F6] px-2 py-2 rounded-xl shadow-xl text-[11px]">
              Sumber : detik.com/kompas.com
            </div>
          </div>
        </div>
      </div>

      <div className='mx-14 flex gap-5 justify-center max-md:hidden'>
         <div className='bg-[#F5F5DC] mt-5 w-[560px] relative overflow-hidden group hover:bg-[#ffffff] hover:shadow-2xl transition duration-300'>
          <img className='absolute -bottom-20 -right-15 -rotate-45 group-hover:rotate-20 transition duration-300' src="/gambar/daun.png" alt="" />
          <h1 className='text-xl font-semibold text-shadow-lg py-4 ml-12'>Disinformasi & Kontroversi Digital</h1>
          <p className='ml-12 w-[480px] '>Baru-baru ini, sejumlah foto dan video yang memperlihatkan kerusakan lingkungan Raja Ampat menjadi viral di media sosial. Namun, banyak di antaranya terbukti AI-generated dan menggunakan manipulasi digital. Misalnya, beberapa unggahan yang menggambarkan terumbu karang mati dan pantai tercemar terlalu dramatis untuk kondisi asli lapangan.</p>
          <p className='ml-12 mt-2  w-[480px] '>Hal ini mengundang kekhawatiran karena visual semacam itu bisa menimbulkan kebingungan dan skeptisisme publik. Ada pengguna yang tergerak dan marah melihat konten tersebut, sementara lainnya mempertanyakan keasliannya—terutama setelah komunitas digital dan platform mulai mengungkap beberapa konten tersebut sebagai hasil AI.</p>
          <div className=" flex ml-12 py-4">
            <div className="bg-[#F6F6F6] px-2 py-2 rounded-xl shadow-xl text-[11px]">
              Sumber : detik.com/kompas.com
            </div>
          </div>
        </div>

        <div className='bg-[#F5F5DC] mt-5 w-[870px] relative overflow-hidden group hover:bg-[#ffffff] hover:shadow-2xl transition duration-300'>
          <img className='absolute -bottom-20 -right-15 -rotate-45 group-hover:rotate-20 transition duration-300' src="/gambar/daun.png" alt="" />
          <h1 className='text-xl font-semibold text-shadow-lg py-5 ml-12'>Pengawasan Ketat Tambang</h1>
          <p className='ml-12 w-[760px]  mr-10'>Raja Ampat, wilayah yang dikenal sebagai surga bawah laut dunia, kembali mendapat sorotan setelah aktivitas tambang nikel oleh PT Gag Nikel tetap berjalan meski empat izin tambang lainnya telah dicabut. Meski secara legal masih berada di luar zona warisan dunia UNESCO, kekhawatiran akan dampak ekologis terus meningkat.</p>
          <p className='ml-12 mt-2  w-[760px] mr-10'>Organisasi lingkungan seperti Greenpeace bersama KPK dan Kementerian Kelautan dan Perikanan (KKP) mendesak pemerintah untuk menetapkan zona larangan tambang (no-go zone) demi melindungi kawasan sensitif ini dari eksploitasi lebih lanjut. Mereka menilai pendekatan pencabutan izin saja belum cukup untuk menjamin perlindungan ekosistem yang rapuh dan sangat berharga ini.</p>
          <p className='mt-2 ml-12  w-[760px] mr-10'>Langkah ini dinilai penting untuk menjamin perlindungan jangka panjang terhadap salah satu kawasan laut terindah dan terkaya di dunia. </p>
          <div className=" flex ml-12 py-6">
            <div className="bg-[#F6F6F6] px-2 py-2 rounded-xl shadow-xl text-[11px]">
              Sumber : detik.com/kompas.com
            </div>
          </div>
        </div>
      </div>


      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 md:mx-14 mt-8 md:mt-10 md:hidden'>
        <div className='bg-blue-400 rounded-2xl group relative hover:bg-[#ffffff] hover:shadow-2xl transition duration-300 overflow-hidden'>
          <img className='absolute -bottom-10 -right-10 -rotate-45 group-hover:rotate-20 transition duration-300 w-24 md:w-32' src="/gambar/daun.png" alt="" />
          <img className='absolute top-0 left-0 w-6 md:w-8' src="/gambar/petik.png" alt="sasasa" />
          <h1 className='text-lg md:text-xl font-semibold py-3 md:py-5 ml-4 md:ml-12 pr'>Tambang Nikel Pada Ekosistem Laut</h1>
          <p className='ml-4 md:ml-12 w-full md:w-[760px]  md:mr-10 text-sm md:text-base px-5'>Raja Ampat, surga laut dunia yang dikenal dengan kekayaan terumbu karang dan keanekaragaman hayati lautnya, kini menghadapi ancaman serius: ekspansi tambang nikel. Aktivitas tambang telah menyebabkan deforestasi lebih dari 500 hektar hutan dan mencemari laut dengan sedimentasi, yang menutupi terumbu karang dan mengganggu kehidupan spesies laut penting seperti paus sperma dan kima raksasa.</p>
          <p className='ml-4 md:ml-12 mt-2 w-full md:w-[760px] mr-4 md:mr-10 text-sm md:text-base px-5'>Pencemaran ini berdampak langsung pada pariwisata bahari—sumber utama pendapatan masyarakat lokal—dan merusak sistem konservasi yang selama ini berhasil dijalankan bersama komunitas. Jika tidak dihentikan, tambang nikel bisa menghancurkan ekosistem yang tak tergantikan dan masa depan ekonomi berkelanjutan di Raja Ampat.</p>
          <p className='px-5 mt-2 ml-4 md:ml-12 w-full md:w-[760px] mr-4 md:mr-10 text-sm md:text-base'>Kini, masyarakat, aktivis, dan ahli lingkungan mendesak pemerintah untuk mencabut izin tambang dan memperkuat pengawasan agar kerusakan ini tidak semakin meluas.</p>
          <div className='flex ml-4 md:ml-12 py-2 md:py-3 my-5'>
            <div className='bg-[#F6F6F6] px-2 py-1 md:py-2 rounded-xl shadow-xl text-[10px] md:text-[11px]'>
              Sumber : detik.com/kompas.com
            </div>
          </div>
        </div>

        <div className='bg-blue-400 rounded-2xl mt-0 md:mt-10 w-full md:w-[560px] relative overflow-hidden group hover:bg-[#ffffff] hover:shadow-2xl transition duration-300'>
          <img className='absolute -bottom-10 -right-10 -rotate-45 group-hover:rotate-20 transition duration-300 w-24 md:w-32' src="/gambar/daun.png" alt="" />
          <h1 className='text-lg md:text-xl font-semibold py-2 md:py-4 ml-4 md:ml-12 '>Tambang Nikel dan Kerusakan Ekologis</h1>
          <p className='ml-4 md:ml-12 w-full md:w-[450px] text-sm md:text-base px-5'>Aktivitas tambang nikel di Raja Ampat mencemari laut dan merusak terumbu karang—daya tarik utama wisatawan. Sedimentasi dan limbah tambang menurunkan kualitas air dan membunuh biota laut, sehingga wisata selam dan ekowisata terganggu.</p>
          <p className='ml-4 md:ml-12 mt-2 w-full md:w-[450px] text-sm md:text-base px-5'>Akibatnya, pendapatan masyarakat lokal yang bergantung pada pariwisata menurun drastis. Jika tidak segera dihentikan, tambang bisa menghapus sumber penghidupan warga dan merusak citra Raja Ampat di mata dunia.</p>
          <div className='flex ml-4 md:ml-12 mt-4 md:mt-6 my-5'>
            <div className='bg-[#F6F6F6] px-2 py-1 md:py-2 rounded-xl shadow-xl text-[10px] md:text-[11px]'>
              Sumber : detik.com/kompas.com
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 md:mx-14 mt-6 md:mt-5 md:hidden'>
        <div className='bg-blue-400 rounded-2xl w-full md:w-[560px] relative overflow-hidden group hover:bg-[#ffffff] hover:shadow-2xl transition duration-300'>
          <img className='absolute -bottom-10 -right-10 -rotate-45 group-hover:rotate-20 transition duration-300 w-24 md:w-32' src="/gambar/daun.png" alt="" />
          <h1 className='text-lg md:text-xl font-semibold py-2 md:py-4 ml-4 md:ml-12 '>Disinformasi & Kontroversi Digital</h1>
          <p className='ml-4 md:ml-12 w-full md:w-[480px] text-sm md:text-base px-5'>Baru-baru ini, sejumlah foto dan video yang memperlihatkan kerusakan lingkungan Raja Ampat menjadi viral di media sosial. Namun, banyak di antaranya terbukti AI-generated dan menggunakan manipulasi digital. Misalnya, beberapa unggahan yang menggambarkan terumbu karang mati dan pantai tercemar terlalu dramatis untuk kondisi asli lapangan.</p>
          <p className='ml-4 md:ml-12 mt-2 w-full md:w-[480px] text-sm md:text-base px-5'>Hal ini mengundang kekhawatiran karena visual semacam itu bisa menimbulkan kebingungan dan skeptisisme publik. Ada pengguna yang tergerak dan marah melihat konten tersebut, sementara lainnya mempertanyakan keasliannya—terutama setelah komunitas digital dan platform mulai mengungkap beberapa konten tersebut sebagai hasil AI.</p>
          <div className='flex ml-4 md:ml-12 py-2 md:py-4 my-5'>
            <div className='bg-[#F6F6F6] px-2 py-1 md:py-2 rounded-xl shadow-xl text-[10px] md:text-[11px]'>
              Sumber : detik.com/kompas.com
            </div>
          </div>
        </div>

        <div className='bg-blue-400 rounded-2xl w-full md:w-[870px] relative overflow-hidden group hover:bg-[#ffffff] hover:shadow-2xl transition duration-300'>
          <img className='absolute -bottom-10 -right-10 -rotate-45 group-hover:rotate-20 transition duration-300 w-24 md:w-32' src="/gambar/daun.png" alt="" />
          <h1 className='text-lg md:text-xl font-semibold py-3 md:py-5 ml-4 md:ml-12'>Pengawasan Ketat Tambang</h1>
          <p className='ml-4 md:ml-12 w-full md:w-[760px] mr-4 md:mr-10 text-sm md:text-base px-5'>Raja Ampat, wilayah yang dikenal sebagai surga bawah laut dunia, kembali mendapat sorotan setelah aktivitas tambang nikel oleh PT Gag Nikel tetap berjalan meski empat izin tambang lainnya telah dicabut. Meski secara legal masih berada di luar zona warisan dunia UNESCO, kekhawatiran akan dampak ekologis terus meningkat.</p>
          <p className='ml-4 md:ml-12 mt-2 w-full md:w-[760px] mr-4 md:mr-10 text-sm md:text-base px-5'>Organisasi lingkungan seperti Greenpeace bersama KPK dan Kementerian Kelautan dan Perikanan (KKP) mendesak pemerintah untuk menetapkan zona larangan tambang (no-go zone) demi melindungi kawasan sensitif ini dari eksploitasi lebih lanjut. Mereka menilai pendekatan pencabutan izin saja belum cukup untuk menjamin perlindungan ekosistem yang rapuh dan sangat berharga ini.</p>
          <p className='mt-2 ml-4 md:ml-12 w-full md:w-[760px] mr-4 md:mr-10 text-sm md:text-base px-5'>Langkah ini dinilai penting untuk menjamin perlindungan jangka panjang terhadap salah satu kawasan laut terindah dan terkaya di dunia.</p>
          <div className='flex ml-4 md:ml-12 py-2 md:py-6 my-5'>
            <div className='bg-[#F6F6F6] px-2 py-1 md:py-2 rounded-xl shadow-xl text-[10px] md:text-[11px]'>
              Sumber : detik.com/kompas.com
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Isu
