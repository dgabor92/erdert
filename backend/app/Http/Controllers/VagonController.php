<?php

namespace App\Http\Controllers;

use App\Models\Vagon;
use Illuminate\Http\Request;

class VagonController extends Controller
{


    private $validationRules = [
        'vagon_szama' => 'required',
        'belepes_datuma' => 'required',
        'megjegyzes' => 'required'
    ];
    private $fillable = [
        'vagon_szama',
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
        return Vagon::all();
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
        $request->validate($this->validationRules, []);
        $vagonItem = new Vagon;
        $vagonItem->fill($request->only($this->fillable));
        $vagonItem->save();
        return response()->json($vagonItem, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Vagon  $vagon
     * @return \Illuminate\Http\Response
     */
    public function show(Vagon $vagon)
    {
        return $vagon;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Vagon  $vagon
     * @return \Illuminate\Http\Response
     */
    public function edit(Vagon $vagon)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Vagon  $vagon
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Vagon $vagon)
    {
        $id = $request->id;
        $updaterVagon = Vagon::where("id", $id)
            ->first()->update($request->all());
        return response()->json($updaterVagon, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vagon  $vagon
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $item = Vagon::where("id", $id)->first();
        $item->delete();
        return response()->json([
            "success" => true,
            "message" => "Vagon deleted successfully",
            "status" => 204
        ]);
    }
}
