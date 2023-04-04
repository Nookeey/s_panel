<?php

namespace App\Http\Controllers\Allegro;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Inertia\Inertia;

class TestController extends Controller
{
    function generateCodeVerifier() {
        $verifier_bytes = random_bytes(80);
        $code_verifier = rtrim(strtr(base64_encode($verifier_bytes), "+/", "-_"), "=");
        return $code_verifier;
    }
    
    function generateCodeChallenge($code_verifier) {
        $challenge_bytes = hash("sha256", $code_verifier, true);
        $code_challenge = rtrim(strtr(base64_encode($challenge_bytes), "+/", "-_"), "=");
        return $code_challenge;
    }
    
    function getAuthorizationCode($code_verifier) {
        $code_challenge = $this->generateCodeChallenge($code_verifier);
        $authorization_redirect_url = env('ALLEGRO_AUTH_URL'). "?response_type=code&client_id=" 
        . env('ALLEGRO_CLIENT_ID') . "&redirect_uri=" . env('ALLEGRO_REDIRECT_URI') . "&code_challenge_method=S256&code_challenge=" . $code_challenge;
        header("Location: $authorization_redirect_url");
        // exit(0);
    }
    
    function getCurl($content) {
        $ch = curl_init();
        curl_setopt_array($ch, array(
            CURLOPT_URL => env('ALLEGRO_TOKEN_URL'),
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $content
        ));
        return $ch;
    }
    
    function getAccessToken($authorization_code, $code_verifier) {
        $authorization_code = urlencode($authorization_code);
        $content = "grant_type=authorization_code&code=".$authorization_code."&redirect_uri=" . env('ALLEGRO_REDIRECT_URI') . "&code_verifier=".$code_verifier;
        $ch = $this->getCurl($content);
        $tokenResult = curl_exec($ch);
        $resultCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
    
        if ($tokenResult === false || $resultCode !== 200) {
            exit ("Something went wrong $resultCode $tokenResult");
        }
        return json_decode($tokenResult)->access_token;
    }
    
    
    function main(Request $request){
        $code_verifier = $this->generateCodeVerifier();
        $access_token = false;
        if (!$request->has('code')) {
            $code_challenge = $this->generateCodeChallenge($code_verifier);
            $authorization_redirect_url = env('ALLEGRO_AUTH_URL'). "?response_type=code&client_id=" 
            . env('ALLEGRO_CLIENT_ID') . "&redirect_uri=" . env('ALLEGRO_REDIRECT_URI') . "&code_challenge_method=S256&code_challenge=" . $code_challenge;
            header("Location: $authorization_redirect_url");
            exit(0);
        }
        sleep(3);
        if ($request->has('code')) {
            echo $request('code');
            $access_token = $this->getAccessToken($request['code'] , $code_verifier);
            echo "access_token = ", $access_token;
        }

        return Inertia::render('Allegro/Index', [
            'code_verifier' => $code_verifier,
            'access_token' => $access_token,
        ]);
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Allegro/Index');
    }

    // connect to api allegro
    public function connect()
    {
        
        $client = new \GuzzleHttp\Client();
        $res = $client->request('POST', 'https://allegro.pl/auth/oauth/authorize', [
            'form_params' => [
                'APIkey' => env('API_KEY'),
            ]
        ]);

        return Inertia::render('Allegro/Index', [
            'data' => 'test',
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
