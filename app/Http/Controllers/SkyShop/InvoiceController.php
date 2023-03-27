<?php

namespace App\Http\Controllers\SkyShop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use GuzzleHttp\Client;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // {
        //     "inv_id":"1",
        //     "inv_number":"1",
        //     "inv_number_string":"2023\/03\/1",
        //     "inv_period":"2023",
        //     "inv_user_id":null,
        //     "inv_email":"wjr8qw1wxa+1fe2b91a5@allegromail.pl",
        //     "inv_order_id":"27",
        //     "inv_custom":"no",
        //     "inv_issue_place":"Chustki",
        //     "inv_data":"[{\"amount\":1,\"price\":68.15,\"tax\":\"23\",\"price_net\":55.41,\"name\":\"Dinozaur T-REX elektroniczny chodzi ryczy zielony\",\"unit\":\"szt.\",\"prod_symbol\":\"KX9990_1\",\"pkwiu\":\"\"}]",
        //     "inv_date":"2023-03-09",
        //     "inv_sell_date":"2023-03-09",
        //     "inv_seller_name":"SLOTH sp. z o.o.",
        //     "inv_seller_address":"Chustki 63A\r\n26-500 Szyd\u0142owiec",
        //     "inv_seller_tax_number":"7991980551",
        //     "inv_payment":"transfer",
        //     "inv_payment_days":null,
        //     "inv_currency":"{\"equ\":\"PLN\",\"sym\":\"z\\u0142\",\"rate\":1}",
        //     "inv_note":"",
        //     "inv_price":"68.15",
        //     "inv_price_net":"55.41",
        //     "inv_tax":"12.74",
        //     "inv_prices_type":"gross",
        //     "inv_bill_company":"JAMP JOANNA SZMUKSTA - FARBOTKO",
        //     "inv_bill_vat":"8541083036",
        //     "inv_bill_city":"Stargard",
        //     "inv_bill_country":"PL",
        //     "inv_bill_street":"Sp\u00f3\u0142dzielcza 25",
        //     "inv_bill_code":"73-110",
        //     "inv_payment_other":"",
        //     "inv_with_vat":"1",
        //     "inv_email_sent":"0"
        //  },
        // sas

        $client = new Client();
        $res = $client->request('POST', env('API').'?function=getInvoices', [
            'form_params' => [
                'APIkey' => env('API_KEY'),
            ]
        ]);

        $result= $res->getBody();
        $result = json_decode($result, true);

        $invoices = [];
        foreach ($result as $key => $value) {
            if (is_array($value)) {
                array_push($invoices, $value);
            }
        }

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
}
