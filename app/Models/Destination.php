<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Destination extends Model
{

    public function destinationDetail()
    {
        return $this->hasMany(DestinationDetail::class);
    }

    public function province()
    {
        return $this->belongsTo(Province::class);
    }
}
