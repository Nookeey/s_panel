<?php

namespace App\Http\Controllers\SkyShop;

use App\Exports\InvoiceExport;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use GuzzleHttp\Client;
use Maatwebsite\Excel\Facades\Excel;
use Spatie\ArrayToXml\ArrayToXml;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $client = new Client();
        $res = $client->request('POST', env('API').'?function=getInvoices', [
            'form_params' => [
                'APIkey' => env('API_KEY'),
            ]
        ]);

        $result= $res->getBody();
        $result = json_decode($result, true);

        $invoices = [];
        $invoicesXML = [];
        foreach ($result as $key => $value) {
            if (is_array($value)) {
                array_push($invoices, $value);
                array_push($invoicesXML, [
                    'ZakupWiersz' => [
                        'LpZakupu' => $value['inv_id'],
                        'KodKrajuNadaniaTIN' => 'PL',
                        'NrDostawcy' => $value['inv_number'],
                        'NazwaDostawcy' => $value['inv_number_string'],
                        'DowodZakupu' => $value['inv_period'],
                        'DataZakupu' => $value['inv_email'],
                    ],
                ]);
            }
        }
  
        $array = [
            'ZakupWiersz' => [
                'LpZakupu' => 'Luke Skywalker',
                'KodKrajuNadaniaTIN' => 'Lightsaber',
                'NrDostawcy' => 'Lightsaber',
                'NazwaDostawcy' => 'Lightsaber',
                'DowodZakupu' => 'Lightsaber',
                'DataZakupu' => 'Lightsaber',
            ],
        ];

        // <ZakupWiersz>
        //     <LpZakupu>1</LpZakupu>
        //     <KodKrajuNadaniaTIN>PL</KodKrajuNadaniaTIN>
        //     <NrDostawcy>5252674798</NrDostawcy>
        //     <NazwaDostawcy>Allegro sp. z o.o.</NazwaDostawcy>
        //     <DowodZakupu>00010272/PL/N/PLN/2023/02</DowodZakupu>
        //     <DataZakupu>2023-02-20</DataZakupu>
        //     <K_42>39.84</K_42>
        //     <K_43>9.16</K_43>
        // </ZakupWiersz>
        
        // $resxml =  ArrayToXml::convert($invoicesXML);

        // create file for download
        // $file = fopen("invoices/invoice-".time().".xml", "w");
        // fwrite($file, $resxml);
        // fclose($file);
       
        return Inertia::render('Invoice/Index', [
            'invoices' => $invoices,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function export() {
        // $invoices = [
        //     [
        //         'id' => 1,
        //         'name' => 'Invoice 1',
        //         'description' => 'Invoice 1 description',
        //     ],
        //     [
        //         'id' => 2,
        //         'name' => 'Invoice 2',
        //         'description' => 'Invoice 2 description',
        //     ],
        //     [
        //         'id' => 3,
        //         'name' => 'Invoice 3',
        //         'description' => 'Invoice 3 description',
        //     ],
        // ];

        // return Excel::download(new InvoiceExport($invoices), 'invoices.xlsx');


        $array = [
            'Good guy' => [
                'name' => 'Luke Skywalker',
                'weapon' => 'Lightsaber'
            ],
            'Bad guy' => [
                'name' => 'Sauron',
                'weapon' => 'Evil Eye'
            ]
        ];
        
        $result = ArrayToXml::convert($array);
        return response($result, 200)
            ->header('Content-Type', 'text/xml');
    }
}
