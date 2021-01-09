$(function() {
    $("#riversideShelter").hide();
    $("#coronaShelter").hide();
    $("#irvineShelter").hide();
    $("#chooseShelter").change(function(){
        var shelterLocation = $(this).children("option:selected").val();
        switch(shelterLocation){
            case 'Riverside': $("#riversideShelter").show();
                break;
            case 'Corona': $("#coronaShelter").show();
                break;
            case 'Irvine' : $("#irvineShelter").show();
            break;
            default:
                console.log('nothing selected');
            
        }
    });
  });