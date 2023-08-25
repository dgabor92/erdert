<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVagonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vagons', function (Blueprint $table) {
            $table->id();
            $table->string('vagon_szama');
            $table->date('belepes_datuma');
            $table->date('kilepes_datuma')->nullable();
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
        Schema::dropIfExists('vagons');
    }
}
