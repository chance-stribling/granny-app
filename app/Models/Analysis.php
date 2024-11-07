<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Analysis extends Model
{
    use HasFactory;

    protected $fillable = [
        'custom_id', // user-facing custom id. they can customize this if they wish, otherwise it will be generated for them
        'user_id', // user who created the analysis
        'team_id',
        'command', // the exact command text to be run
        'flags', // any flags to be passed to the command
        'analysis_type',
        'title', // a user-generated title for this run
        'description', // an optional user-generated description of the run
        'input_file', // array of file addresses of the input photo(s) - should this be its own model with a one-to-many relation? will reevaluate later
        'output_file', // txt file containing results of analysis (can we store the full results?)
//        'started_at', // date and time the analysis was run
//        'finished_at', // date and time the analysis finished
    ];
}
