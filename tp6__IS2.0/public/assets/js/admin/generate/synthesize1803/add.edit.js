
$(document).ready(function() {

    var url = location.search; //获取url中"?"符后的字串
    url=decodeURI(url);
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    var target=theRequest.id;
    if(target != -1){
        $.ajax({
            type : "POST",
            contentType : "application/x-www-form-urlencoded",
            url : "/admin/Synthesize1803/retrieveData",
            data : {
                key:'id',
                value:target
            },
            success : function(res) {
                $('#id').val(res.result[0]['id']);$('#name').val(res.result[0]['name']);$('#student_id').val(res.result[0]['student_id']);$('#situation').val(res.result[0]['situation']);$('#message').val(res.result[0]['message']);$('#zc2018510429').val(res.result[0]['zc2018510429']);$('#zc2018510435').val(res.result[0]['zc2018510435']);$('#zc2018510438').val(res.result[0]['zc2018510438']);$('#zc2018510447').val(res.result[0]['zc2018510447']);$('#zc2018510448').val(res.result[0]['zc2018510448']);$('#zc2018510450').val(res.result[0]['zc2018510450']);$('#zc2018510452').val(res.result[0]['zc2018510452']);$('#zc2018510456').val(res.result[0]['zc2018510456']);$('#zc2018510458').val(res.result[0]['zc2018510458']);$('#zc2018510463').val(res.result[0]['zc2018510463']);$('#zc2018510465').val(res.result[0]['zc2018510465']);$('#zc2018510469').val(res.result[0]['zc2018510469']);$('#zc2018510479').val(res.result[0]['zc2018510479']);$('#zc2018510490').val(res.result[0]['zc2018510490']);$('#zc2018510496').val(res.result[0]['zc2018510496']);$('#zc2018510498').val(res.result[0]['zc2018510498']);$('#zc2018510499').val(res.result[0]['zc2018510499']);$('#zc2018510520').val(res.result[0]['zc2018510520']);$('#zc2018510524').val(res.result[0]['zc2018510524']);$('#zc2018510534').val(res.result[0]['zc2018510534']);$('#zc2018510537').val(res.result[0]['zc2018510537']);$('#zc2018510541').val(res.result[0]['zc2018510541']);$('#zc2018510543').val(res.result[0]['zc2018510543']);$('#zc2018510552').val(res.result[0]['zc2018510552']);$('#zc2018510564').val(res.result[0]['zc2018510564']);$('#zc2018510568').val(res.result[0]['zc2018510568']);$('#zc2018510569').val(res.result[0]['zc2018510569']);$('#zc2018510579').val(res.result[0]['zc2018510579']);$('#zc2018510588').val(res.result[0]['zc2018510588']);$('#zc2018510591').val(res.result[0]['zc2018510591']);$('#zc2018510592').val(res.result[0]['zc2018510592']);$('#zc2018510594').val(res.result[0]['zc2018510594']);$('#zc2018510596').val(res.result[0]['zc2018510596']);$('#zc2018510600').val(res.result[0]['zc2018510600']);$('#zc2018510601').val(res.result[0]['zc2018510601']);$('#zc2018510616').val(res.result[0]['zc2018510616']);$('#zc2018510618').val(res.result[0]['zc2018510618']);$('#zc2018510620').val(res.result[0]['zc2018510620']);$('#zc2018510625').val(res.result[0]['zc2018510625']);$('#zc2018510628').val(res.result[0]['zc2018510628']);$('#zc2018510636').val(res.result[0]['zc2018510636']);$('#zc2018510640').val(res.result[0]['zc2018510640']);$('#zc2018510643').val(res.result[0]['zc2018510643']);$('#zc2018510647').val(res.result[0]['zc2018510647']);$('#zc2018510664').val(res.result[0]['zc2018510664']);$('#zc2018510666').val(res.result[0]['zc2018510666']);$('#zc2018510668').val(res.result[0]['zc2018510668']);$('#zc2018510671').val(res.result[0]['zc2018510671']);$('#zc2018510672').val(res.result[0]['zc2018510672']);$('#zc2018510679').val(res.result[0]['zc2018510679']);$('#zc2018510681').val(res.result[0]['zc2018510681']);$('#zc2018510691').val(res.result[0]['zc2018510691']);$('#zc2018510695').val(res.result[0]['zc2018510695']);$('#zc2018510696').val(res.result[0]['zc2018510696']);$('#zc2018510705').val(res.result[0]['zc2018510705']);$('#zc2018510708').val(res.result[0]['zc2018510708']);$('#zc2018510713').val(res.result[0]['zc2018510713']);$('#zc2018510721').val(res.result[0]['zc2018510721']);$('#zc2018510722').val(res.result[0]['zc2018510722']);$('#zc2018510728').val(res.result[0]['zc2018510728']);$('#zc2018510729').val(res.result[0]['zc2018510729']);$('#zc2018510752').val(res.result[0]['zc2018510752']);$('#zc2018510753').val(res.result[0]['zc2018510753']);$('#zc2018510755').val(res.result[0]['zc2018510755']);$('#final').val(res.result[0]['final']);
            }
        });
    
        $("#commit").click(function() {
            var id = $('#id').val();var name = $('#name').val();var student_id = $('#student_id').val();var situation = $('#situation').val();var message = $('#message').val();var zc2018510429 = $('#zc2018510429').val();var zc2018510435 = $('#zc2018510435').val();var zc2018510438 = $('#zc2018510438').val();var zc2018510447 = $('#zc2018510447').val();var zc2018510448 = $('#zc2018510448').val();var zc2018510450 = $('#zc2018510450').val();var zc2018510452 = $('#zc2018510452').val();var zc2018510456 = $('#zc2018510456').val();var zc2018510458 = $('#zc2018510458').val();var zc2018510463 = $('#zc2018510463').val();var zc2018510465 = $('#zc2018510465').val();var zc2018510469 = $('#zc2018510469').val();var zc2018510479 = $('#zc2018510479').val();var zc2018510490 = $('#zc2018510490').val();var zc2018510496 = $('#zc2018510496').val();var zc2018510498 = $('#zc2018510498').val();var zc2018510499 = $('#zc2018510499').val();var zc2018510520 = $('#zc2018510520').val();var zc2018510524 = $('#zc2018510524').val();var zc2018510534 = $('#zc2018510534').val();var zc2018510537 = $('#zc2018510537').val();var zc2018510541 = $('#zc2018510541').val();var zc2018510543 = $('#zc2018510543').val();var zc2018510552 = $('#zc2018510552').val();var zc2018510564 = $('#zc2018510564').val();var zc2018510568 = $('#zc2018510568').val();var zc2018510569 = $('#zc2018510569').val();var zc2018510579 = $('#zc2018510579').val();var zc2018510588 = $('#zc2018510588').val();var zc2018510591 = $('#zc2018510591').val();var zc2018510592 = $('#zc2018510592').val();var zc2018510594 = $('#zc2018510594').val();var zc2018510596 = $('#zc2018510596').val();var zc2018510600 = $('#zc2018510600').val();var zc2018510601 = $('#zc2018510601').val();var zc2018510616 = $('#zc2018510616').val();var zc2018510618 = $('#zc2018510618').val();var zc2018510620 = $('#zc2018510620').val();var zc2018510625 = $('#zc2018510625').val();var zc2018510628 = $('#zc2018510628').val();var zc2018510636 = $('#zc2018510636').val();var zc2018510640 = $('#zc2018510640').val();var zc2018510643 = $('#zc2018510643').val();var zc2018510647 = $('#zc2018510647').val();var zc2018510664 = $('#zc2018510664').val();var zc2018510666 = $('#zc2018510666').val();var zc2018510668 = $('#zc2018510668').val();var zc2018510671 = $('#zc2018510671').val();var zc2018510672 = $('#zc2018510672').val();var zc2018510679 = $('#zc2018510679').val();var zc2018510681 = $('#zc2018510681').val();var zc2018510691 = $('#zc2018510691').val();var zc2018510695 = $('#zc2018510695').val();var zc2018510696 = $('#zc2018510696').val();var zc2018510705 = $('#zc2018510705').val();var zc2018510708 = $('#zc2018510708').val();var zc2018510713 = $('#zc2018510713').val();var zc2018510721 = $('#zc2018510721').val();var zc2018510722 = $('#zc2018510722').val();var zc2018510728 = $('#zc2018510728').val();var zc2018510729 = $('#zc2018510729').val();var zc2018510752 = $('#zc2018510752').val();var zc2018510753 = $('#zc2018510753').val();var zc2018510755 = $('#zc2018510755').val();var final = $('#final').val();

            $.ajax({
                type : "POST",
                contentType: "application/x-www-form-urlencoded",
                url : "/admin/Synthesize1803/updateData",
                data : {
                    target:target,
                    id:id,name:name,student_id:student_id,situation:situation,message:message,zc2018510429:zc2018510429,zc2018510435:zc2018510435,zc2018510438:zc2018510438,zc2018510447:zc2018510447,zc2018510448:zc2018510448,zc2018510450:zc2018510450,zc2018510452:zc2018510452,zc2018510456:zc2018510456,zc2018510458:zc2018510458,zc2018510463:zc2018510463,zc2018510465:zc2018510465,zc2018510469:zc2018510469,zc2018510479:zc2018510479,zc2018510490:zc2018510490,zc2018510496:zc2018510496,zc2018510498:zc2018510498,zc2018510499:zc2018510499,zc2018510520:zc2018510520,zc2018510524:zc2018510524,zc2018510534:zc2018510534,zc2018510537:zc2018510537,zc2018510541:zc2018510541,zc2018510543:zc2018510543,zc2018510552:zc2018510552,zc2018510564:zc2018510564,zc2018510568:zc2018510568,zc2018510569:zc2018510569,zc2018510579:zc2018510579,zc2018510588:zc2018510588,zc2018510591:zc2018510591,zc2018510592:zc2018510592,zc2018510594:zc2018510594,zc2018510596:zc2018510596,zc2018510600:zc2018510600,zc2018510601:zc2018510601,zc2018510616:zc2018510616,zc2018510618:zc2018510618,zc2018510620:zc2018510620,zc2018510625:zc2018510625,zc2018510628:zc2018510628,zc2018510636:zc2018510636,zc2018510640:zc2018510640,zc2018510643:zc2018510643,zc2018510647:zc2018510647,zc2018510664:zc2018510664,zc2018510666:zc2018510666,zc2018510668:zc2018510668,zc2018510671:zc2018510671,zc2018510672:zc2018510672,zc2018510679:zc2018510679,zc2018510681:zc2018510681,zc2018510691:zc2018510691,zc2018510695:zc2018510695,zc2018510696:zc2018510696,zc2018510705:zc2018510705,zc2018510708:zc2018510708,zc2018510713:zc2018510713,zc2018510721:zc2018510721,zc2018510722:zc2018510722,zc2018510728:zc2018510728,zc2018510729:zc2018510729,zc2018510752:zc2018510752,zc2018510753:zc2018510753,zc2018510755:zc2018510755,final:final
                },
                success : function(res) {
                    if(res.status == 200){
                        window.parent.location.reload();
                    }
                }
            });
        })
    }
    if(target == -1){
        $("#commit").click(function() {
            var id = $('#id').val();var name = $('#name').val();var student_id = $('#student_id').val();var situation = $('#situation').val();var message = $('#message').val();var zc2018510429 = $('#zc2018510429').val();var zc2018510435 = $('#zc2018510435').val();var zc2018510438 = $('#zc2018510438').val();var zc2018510447 = $('#zc2018510447').val();var zc2018510448 = $('#zc2018510448').val();var zc2018510450 = $('#zc2018510450').val();var zc2018510452 = $('#zc2018510452').val();var zc2018510456 = $('#zc2018510456').val();var zc2018510458 = $('#zc2018510458').val();var zc2018510463 = $('#zc2018510463').val();var zc2018510465 = $('#zc2018510465').val();var zc2018510469 = $('#zc2018510469').val();var zc2018510479 = $('#zc2018510479').val();var zc2018510490 = $('#zc2018510490').val();var zc2018510496 = $('#zc2018510496').val();var zc2018510498 = $('#zc2018510498').val();var zc2018510499 = $('#zc2018510499').val();var zc2018510520 = $('#zc2018510520').val();var zc2018510524 = $('#zc2018510524').val();var zc2018510534 = $('#zc2018510534').val();var zc2018510537 = $('#zc2018510537').val();var zc2018510541 = $('#zc2018510541').val();var zc2018510543 = $('#zc2018510543').val();var zc2018510552 = $('#zc2018510552').val();var zc2018510564 = $('#zc2018510564').val();var zc2018510568 = $('#zc2018510568').val();var zc2018510569 = $('#zc2018510569').val();var zc2018510579 = $('#zc2018510579').val();var zc2018510588 = $('#zc2018510588').val();var zc2018510591 = $('#zc2018510591').val();var zc2018510592 = $('#zc2018510592').val();var zc2018510594 = $('#zc2018510594').val();var zc2018510596 = $('#zc2018510596').val();var zc2018510600 = $('#zc2018510600').val();var zc2018510601 = $('#zc2018510601').val();var zc2018510616 = $('#zc2018510616').val();var zc2018510618 = $('#zc2018510618').val();var zc2018510620 = $('#zc2018510620').val();var zc2018510625 = $('#zc2018510625').val();var zc2018510628 = $('#zc2018510628').val();var zc2018510636 = $('#zc2018510636').val();var zc2018510640 = $('#zc2018510640').val();var zc2018510643 = $('#zc2018510643').val();var zc2018510647 = $('#zc2018510647').val();var zc2018510664 = $('#zc2018510664').val();var zc2018510666 = $('#zc2018510666').val();var zc2018510668 = $('#zc2018510668').val();var zc2018510671 = $('#zc2018510671').val();var zc2018510672 = $('#zc2018510672').val();var zc2018510679 = $('#zc2018510679').val();var zc2018510681 = $('#zc2018510681').val();var zc2018510691 = $('#zc2018510691').val();var zc2018510695 = $('#zc2018510695').val();var zc2018510696 = $('#zc2018510696').val();var zc2018510705 = $('#zc2018510705').val();var zc2018510708 = $('#zc2018510708').val();var zc2018510713 = $('#zc2018510713').val();var zc2018510721 = $('#zc2018510721').val();var zc2018510722 = $('#zc2018510722').val();var zc2018510728 = $('#zc2018510728').val();var zc2018510729 = $('#zc2018510729').val();var zc2018510752 = $('#zc2018510752').val();var zc2018510753 = $('#zc2018510753').val();var zc2018510755 = $('#zc2018510755').val();var final = $('#final').val();
            $.ajax({
                type : "POST",
                contentType: "application/x-www-form-urlencoded",
                url : "/admin/Synthesize1803/createData",
                data : {
                    id:id,name:name,student_id:student_id,situation:situation,message:message,zc2018510429:zc2018510429,zc2018510435:zc2018510435,zc2018510438:zc2018510438,zc2018510447:zc2018510447,zc2018510448:zc2018510448,zc2018510450:zc2018510450,zc2018510452:zc2018510452,zc2018510456:zc2018510456,zc2018510458:zc2018510458,zc2018510463:zc2018510463,zc2018510465:zc2018510465,zc2018510469:zc2018510469,zc2018510479:zc2018510479,zc2018510490:zc2018510490,zc2018510496:zc2018510496,zc2018510498:zc2018510498,zc2018510499:zc2018510499,zc2018510520:zc2018510520,zc2018510524:zc2018510524,zc2018510534:zc2018510534,zc2018510537:zc2018510537,zc2018510541:zc2018510541,zc2018510543:zc2018510543,zc2018510552:zc2018510552,zc2018510564:zc2018510564,zc2018510568:zc2018510568,zc2018510569:zc2018510569,zc2018510579:zc2018510579,zc2018510588:zc2018510588,zc2018510591:zc2018510591,zc2018510592:zc2018510592,zc2018510594:zc2018510594,zc2018510596:zc2018510596,zc2018510600:zc2018510600,zc2018510601:zc2018510601,zc2018510616:zc2018510616,zc2018510618:zc2018510618,zc2018510620:zc2018510620,zc2018510625:zc2018510625,zc2018510628:zc2018510628,zc2018510636:zc2018510636,zc2018510640:zc2018510640,zc2018510643:zc2018510643,zc2018510647:zc2018510647,zc2018510664:zc2018510664,zc2018510666:zc2018510666,zc2018510668:zc2018510668,zc2018510671:zc2018510671,zc2018510672:zc2018510672,zc2018510679:zc2018510679,zc2018510681:zc2018510681,zc2018510691:zc2018510691,zc2018510695:zc2018510695,zc2018510696:zc2018510696,zc2018510705:zc2018510705,zc2018510708:zc2018510708,zc2018510713:zc2018510713,zc2018510721:zc2018510721,zc2018510722:zc2018510722,zc2018510728:zc2018510728,zc2018510729:zc2018510729,zc2018510752:zc2018510752,zc2018510753:zc2018510753,zc2018510755:zc2018510755,final:final
                },
                success : function(res) {
                    if(res.status == 200){
                        window.parent.location.reload();
                    }
                }
            });
        })
    }
})

