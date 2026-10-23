public class Lasagna {
    // TODO: define the 'expectedMinutesInOven()' method
    public int expectedMinutesInOven(){
        return 40;
    };

    // TODO: define the 'remainingMinutesInOven()' method
    public int remainingMinutesInOven(int time){
        return expectedMinutesInOven() - time;
    };

    // TODO: define the 'preparationTimeInMinutes()' method
    public int preparationTimeInMinutes(int layer){
        return 2 * layer;
    };
    
    // TODO: define the 'totalTimeInMinutes()' method
    public int totalTimeInMinutes(int layer, int time){
        int layerTime = preparationTimeInMinutes(layer);

        return layerTime + time;
    };
}
