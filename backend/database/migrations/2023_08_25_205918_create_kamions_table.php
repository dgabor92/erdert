<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKamionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kamions', function (Blueprint $table) {
            $table->id();
            $table->string('sofor_neve');
            $table->string('rendszam');
            $table->string('szal_level_szama');
            $table->date('belepes_datuma');
            $table->date('kilepes_datuma')->nullable();
            $table->integer('suly_üres');
            $table->integer('suly_tele');
            $table->string('megjegyzes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kamions');
    }
}
