<?php

namespace App\Http\Controllers;

use App\Models\Szemelygepkocsi;
use Illuminate\Http\Request;

class SzemelygepkocsiController extends Controller
{
    private $validationRules = [
        'sofor_neve' => 'required',
        'rendszam' => 'required',
        'belepes_datuma' => 'required',
        'megjegyzes' => 'required'
    ];
    private $fillable = [
        'sofor_neve',
        'rendszam',
        'belepes_datuma',
        'megjegyzes'
    ];


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Szemelygepkocsi::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate($this->validationRules, []);
        $szemelygepkocsiItem = new Szemelygepkocsi;
        $szemelygepkocsiItem->fill($request->only($this->fillable));
        $szemelygepkocsiItem->save();
        return response()->json($szemelygepkocsiItem, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Szemelygepkocsi  $szemelygepkocsi
     * @return \Illuminate\Http\Response
     */
    public function show(Szemelygepkocsi $szemelygepkocsi)
    {
        return $szemelygepkocsi;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Szemelygepkocsi  $szemelygepkocsi
     * @return \Illuminate\Http\Response
     */
    public function edit(Szemelygepkocsi $szemelygepkocsi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Szemelygepkocsi  $szemelygepkocsi
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Szemelygepkocsi $szemelygepkocsi)
    {
        $id = $request->id;
        $updateSzemely = Szemelygepkocsi::where('id', $id)
            ->first()->update($request->all());
        return response()->json($updateSzemely, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Szemelygepkocsi  $szemelygepkocsi
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $item = Szemelygepkocsi::where('id', $id)->first();
        $item->delete();
        return response()->json([
            'success' => true,
            'message' => 'Személygépkocsi deleted successfully',
            'status' => 204
        ]);
    }
}
