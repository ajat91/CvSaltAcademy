	
	document.getElementById("pengalaman").onclick=function()
	{
		var pengalaman;
		pengalaman =`<table>
		<tr>
            <td>
               <h1>Pengalaman Kerja</h1>
            </td>
        </tr>
        <tr>
            <td>
                <span>Magang 2021, Sebagai Web Developer di PT. Neural 
				Technologies Indonesia. <br><span>Tugas dan Tanggung Jawab:</span> </span>
                <ol>
                    <li>Membuat tampilan front end website </li>
                    <li>Mengontrol KPI (Key Indicator Performance)</li>
                    <li>Mendevelop Website</li>
                    <li>Merancang website Microservice</li>
                </ol>
            </td>
			<tr>
            <td>
                <span> Magang 2020, Sebagai Digital Marketing di PT.Wijaya 
                    Equipments. <br><span>Tugas dan Tanggung Jawab:</span> </span>
                <ol>
                    <li>Membuat web dengan CMS wordpress dan blogspot</li>
                    <li>Mengoptimasi SEO website in-page</li>
                    <li>Copy writting konten web</li>
                    <li>Membuat backlink (off-page) untuk menunjang website 
                        utama</li>
                </ol>
            </td>
			<tr>
            <td>
                <span> Maret 2017 - Mei 2020, Sebagai Staff Hrd Personalia di PT.Enka 
				Anugrah Indonesia. <br><span>Tugas dan Tanggung Jawab:</span> </span>
                <ol>
                    <li>Memasang Iklan Lowongan Pekerjaan</li>
                    <li>Mempersiapkan proses penyeleksian tenaga kerja</li>
                    <li>Melakukan Penjadwalan Asessment test dan Menyiapkan 
					interview awal</li>
                    <li>Membantu dalam proses recruitment</li>
                </ol>
            </td>
        </tr>
    </table>`;
		document.getElementById("artikel").innerHTML = pengalaman;
		
	}

	document.getElementById("gambar1").onclick=function()
	{
		var gambar;
		gambar='<img src="images/ajat1.png" width="100">';

		document.getElementById("gambar").innerHTML=gambar;	
	}

	document.getElementById("gambar2").onclick=function()
	{
		var gambar;
		gambar='<img src="images/ajat2.png" width="100">';

		document.getElementById("gambar").innerHTML=gambar;	
	}

	document.getElementById("gambar3").onclick=function()
	{
		var gambar;
		gambar='<img src="images/ajat3.png" width="100">';

		document.getElementById("gambar").innerHTML=gambar;
	}

